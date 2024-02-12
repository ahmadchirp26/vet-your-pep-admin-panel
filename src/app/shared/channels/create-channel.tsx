'use client';
import useCreateChannelMutation from "@/api/Channels/useCreateChannelMutation";
import ChannelForm from "./channel-form";
import { type ChannelStatus } from "@/__generated__/graphql";
import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";
import toast from "react-hot-toast";

const CreateChannel = () => {
  const { mutateAsync } = useCreateChannelMutation();
  const router = useRouter()
  return (
    <ChannelForm
      submitHandler={async (data) => {
        try {
          await mutateAsync({
            input: {
              title: data.title,
              about: data.about,
              rules: data.rules,
              status: data.visibility as ChannelStatus,
              moderatorId: data.moderator.id,
              totalPrice: parseFloat(data.price),
            },
          });
          toast.success("Channel created successfully");
          router.push(routes.channels.list)
        }catch(e) {
          toast.error("Error creating channel")
        }

      }}
    />
  );
};

export default CreateChannel;
