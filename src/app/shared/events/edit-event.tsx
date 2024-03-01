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
  const { data, status } = useGetEventById({
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    ? new Date(data?.getEventById?.startDate).toISOString().slice(0, 16)
    : "";

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
          bannerImage: data?.getEventById?.images?.[0] ?? undefined,
        },
      }}
      submitHandler={async (data) => {
        try {
          const filesToBeUploaded = [
            data.media.bannerImage && typeof data.media.bannerImage !== "string"
              ? { ...data.media.bannerImage, id: "banner" }
              : undefined,
          ].filter(Boolean) as FileSchema[];

          const imagesUploaded =
            filesToBeUploaded.length > 0
              ? await S3UploadHandlerMutationFn(filesToBeUploaded, accessToken)
              : [undefined, undefined];

          await mutateAsync({
            input: {
              eventId: id,
              title: data.title,
              text: data.text,
              startDate: data.date,
              channelId: data.channel?.id,
              images: imagesUploaded
                .filter((i) => i?.uploadedURL)
                .map((i) => i?.uploadedURL) as Array<string>,
            },
          });
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
