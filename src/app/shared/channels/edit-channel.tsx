"use client";
import useUpdateChannelMutation from "@/api/Channels/useUpdateChannelMutation";
import React from "react";
import ChannelForm from "./channel-form";
import useGetChannel from "@/api/Channels/useGetChannel";
import toast from "react-hot-toast";
import S3UploadHandlerMutationFn from "@/api/S3UploadHandlerMutationFn";
import { type FileSchema } from "@/lib/zod-schemas/attachment";
import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";

type Props = {
  id: string;
  accessToken: string;
};

const EditChannel = ({ id, accessToken }: Props) => {
  const { data, status, refetch } = useGetChannel({
    id,
  });
  const { mutateAsync } = useUpdateChannelMutation();
  const router = useRouter();

  if (status === "pending") {
    return "Loading...";
  }
  if (status === "error") {
    return "Error";
  }
  console.log("Initial Values", {
    title: data?.getChannelById.title,
    about: data?.getChannelById.about,
    rules: data?.getChannelById.rules,
    media: {
      image: data?.getChannelById.image,
      bannerImage: data?.getChannelById.backgroundImage,
    },
    moderator: {
      id: data?.getChannelById.moderator.id,
      firstName: data?.getChannelById.moderator.firstName,
      lastName: data?.getChannelById.moderator.lastName,
      email: data?.getChannelById.moderator.email,
    },
    visibility: data?.getChannelById.status,
    price: (data?.getChannelById.price ?? 0) + "",
  });

  return (
    <ChannelForm
      id={id}
      channel={{
        title: data?.getChannelById.title,
        about: data?.getChannelById.about,
        rules: data?.getChannelById.rules,
        media: {
          image: data?.getChannelById.image,
          bannerImage: data?.getChannelById.backgroundImage,
        },
        moderator: {
          id: data?.getChannelById.moderator.id,
          firstName: data?.getChannelById.moderator.firstName,
          lastName: data?.getChannelById.moderator.lastName,
          email: data?.getChannelById.moderator.email,
        },
        visibility: data?.getChannelById.status,
        price: (data?.getChannelById.price ?? 0) + "",
      }}
      readOnlyFields={["moderator", "visibility", "price"]}
      submitHandler={async (data) => {
        try {
          const filesToBeUploaded = [
            data.media.image && typeof data.media.image !== "string"
              ? { ...data.media.image, id: "media" }
              : undefined,
            data.media.bannerImage && typeof data.media.bannerImage !== "string"
              ? { ...data.media.bannerImage, id: "banner" }
              : undefined,
          ].filter(Boolean) as FileSchema[];

          const [profileImage, bannerImage] =
            filesToBeUploaded.length > 0
              ? await S3UploadHandlerMutationFn(filesToBeUploaded, accessToken)
              : [undefined, undefined];

          console.log("Sending values:", {
            id: id,
            title: data.title,
            about: data.about,
            rules: data.rules,
            backgroundImage: bannerImage?.uploadedURL,
            image: profileImage?.uploadedURL,
          });

          await mutateAsync({
            input: {
              id: id,
              title: data.title,
              about: data.about,
              rules: data.rules,
              backgroundImage: bannerImage?.uploadedURL,
              image: profileImage?.uploadedURL,
            },
          });
          toast.success("Channel updated successfully");
          await refetch();

          // router.push(routes.channels.list);
        } catch (e) {
          toast.error("Error updating channel");
        }
      }}
    />
  );
};

export default EditChannel;
