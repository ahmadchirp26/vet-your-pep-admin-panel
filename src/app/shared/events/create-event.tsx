"use client";

import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";
import toast from "react-hot-toast";
import S3UploadHandlerMutationFn from "@/api/S3UploadHandlerMutationFn";
import { type FileSchema } from "@/lib/zod-schemas/attachment";
import EventForm from "./event-form";
import useCreateEventMutation from "@/api/Events/useCreateEventMutation";

interface Props {
  accessToken: string;
}

const CreateEvent = ({ accessToken }: Props) => {
  const { mutateAsync } = useCreateEventMutation();
  const router = useRouter();
  return (
    <EventForm
      submitHandler={async (data) => {
        try {
          const filesToBeUploaded = [
            data.media.bannerImage && typeof data.media.bannerImage !== "string"
              ? { ...data.media.bannerImage, id: "banner" }
              : undefined,
          ].filter(Boolean) as FileSchema[];

          const [bannerImage] =
            filesToBeUploaded.length > 0
              ? await S3UploadHandlerMutationFn(filesToBeUploaded, accessToken)
              : [undefined, undefined];
          await mutateAsync({
            input: {
              title: data.title,
              channelId: data.channel.id,
              text: data.text,
              startDate: data.date,
              images: bannerImage?.uploadedURL
                ? [bannerImage?.uploadedURL]
                : undefined,
            },
          });
          toast.success("Event created successfully");
          router.push(routes.events.list);
        } catch (e) {
          toast.error("Error creating event");
        }
      }}
    />
  );
};

export default CreateEvent;
