"use client";
import useUpdateChannelMutation from "@/api/Channels/useUpdateChannelMutation";
import React from "react";
import ChannelForm from "./channel-form";
import useGetChannel from "@/api/Channels/useGetChannel";
import toast from "react-hot-toast";

type Props = {
  id: string;
};

const EditChannel = ({ id }: Props) => {
  const { data, status } = useGetChannel({
    id,
  });
  const { mutateAsync } = useUpdateChannelMutation();

  if (status === "pending") {
    return "Loading...";
  }
  if (status === "error") {
    return "Error";
  }
  return (
    <ChannelForm
      id={id}
      channel={{
        title: data?.getChannelById.title,
        about: data?.getChannelById.about,
        rules: data?.getChannelById.rules,
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
          await mutateAsync({
            input: {
              id: id,
              title: data.title,
              about: data.about,
              rules: data.rules,
            },
          });
          toast.success("Channel updated successfully");
        }catch(e) {
          toast.error("Error updating channel")
        }

      }}
    />
  );
};

export default EditChannel;
