"use client";
import React from "react";
import EventForm from "./event-form";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import S3UploadHandlerMutationFn from "@/api/S3UploadHandlerMutationFn";
import { type FileSchema } from "@/lib/zod-schemas/attachment";
import { useGetEventById } from "@/api/Events/useGetEventById";
import useUpdateEventMutation from "@/api/Events/useUpdateEventMutation";
import { routes } from "@/config/routes";

type Props = {
  id: string;
  accessToken: string;
};

const EditEvent = ({ id, accessToken }: Props) => {
  const { data, status, refetch } = useGetEventById({
    id,
  });

  const { mutateAsync } = useUpdateEventMutation();
  const router = useRouter();

  if (status === "pending") {
    return "Loading...";
  }
  if (status === "error") {
    return "Error";
  }
  const startDate = data?.getEventById?.startDate
    ? // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      new Date(data?.getEventById?.startDate).toISOString().slice(0, 16)
    : "";

  console.log("Images", data?.getEventById?.images?.[0]);

  return (
    <EventForm
      id={id}
      event={{
        title: data?.getEventById?.title,
        text: data?.getEventById?.text,
        date: startDate,

        channel: {
          id: data?.getEventById?.channel?.id,
          title: data?.getEventById?.channel?.title,
        },

        media: {
          //   image: data?.getChannelById.image,
          bannerImage: data?.getEventById?.images?.[0],
        },
      }}
      submitHandler={async (data) => {
        try {
          let bannerImage = data.media.bannerImage;
          console.log("Banner Image", bannerImage);

          // Check if bannerImage is a string (already uploaded image URL)
          if (typeof data.media.bannerImage !== "string") {
            console.log("Condition Entered");
            const filesToBeUploaded = [
              data.media.bannerImage
                ? { ...data.media.bannerImage, id: "banner" }
                : undefined,
            ].filter(Boolean) as FileSchema[];

            console.log(filesToBeUploaded);

            const imagesUploaded =
              filesToBeUploaded.length > 0
                ? await S3UploadHandlerMutationFn(
                    filesToBeUploaded,
                    accessToken,
                  )
                : [undefined, undefined];

            bannerImage = imagesUploaded[0]?.uploadedURL ?? undefined;
          }

          const updateInput: {
            eventId: string;
            title: string;
            text: string;
            startDate: string;
            channelId: string;
            images?: string[]; // Define images as an optional property
          } = {
            eventId: id,
            title: data.title,
            text: data.text,
            startDate: data.date,
            channelId: data.channel?.id,
          };

          // If the banner image has changed, include it in the update input
          if (typeof data.media.bannerImage !== "string") {
            updateInput.images = [bannerImage].filter(Boolean) as Array<string>;
          }

          // Perform the update mutation
          await mutateAsync({
            input: updateInput,
          });
          await refetch();

          toast.success("Event updated successfully");

          router.push(routes.events.list);
        } catch (e) {
          toast.error("Error updating event");
        }
      }}
    />
  );
};

export default EditEvent;
