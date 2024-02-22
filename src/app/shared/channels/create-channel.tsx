"use client";
import useCreateChannelMutation from "@/api/Channels/useCreateChannelMutation";
import ChannelForm from "./channel-form";
import { type ChannelStatus } from "@/__generated__/graphql";
import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";
import toast from "react-hot-toast";
import S3UploadHandlerMutationFn from "@/api/S3UploadHandlerMutationFn";
import { type FileSchema } from "@/lib/zod-schemas/attachment";

interface Props {
  accessToken: string;
}

const CreateChannel = ({accessToken}:Props) => {
  const { mutateAsync } = useCreateChannelMutation();
  const router = useRouter();
  return (
    <ChannelForm
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
          await mutateAsync({
            input: {
              title: data.title,
              about: data.about,
              rules: data.rules,
              status: data.visibility as ChannelStatus,
              moderatorId: data.moderator.id,
              backgroundImage: bannerImage?.uploadedURL,
              image: profileImage?.uploadedURL,
              totalPrice: parseFloat(data.price),
            },
          });
          toast.success("Channel created successfully");
          router.push(routes.channels.list);
        } catch (e) {
          toast.error("Error creating channel");
        }
      }}
    />
  );
};

export default CreateChannel;
