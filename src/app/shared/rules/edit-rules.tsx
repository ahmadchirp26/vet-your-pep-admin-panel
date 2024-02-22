"use client";
import React from "react";
import useGetChannel from "@/api/Channels/useGetChannel";
import toast from "react-hot-toast";
import useGetRulesById from "@/api/PlatformRules/useGetPlatformRules";
import useUpdateRulesMutation from "@/api/PlatformRules/useUpdateRulesMutation";
import RuleForm from "./rules-list/rules-form";

type Props = {
  id: string;
};

const EditRules = ({ id }: Props) => {
  const { data, status } = useGetRulesById({
    id,
  });
  const { mutateAsync } = useUpdateRulesMutation();

  if (status === "pending") {
    return "Loading...";
  }
  if (status === "error") {
    return "Error";
  }
  return (
    <RuleForm
      id={id}
      rule={{
        title: data?.getPlatFormRulesById.title,
        rules: data?.getPlatFormRulesById.rules,
      }}
      submitHandler={async (data) => {
        try {
          await mutateAsync({
            input: {
              title: data.title,
              rules: data.rules,
              platFormRulesId: id,
            },
          });
          toast.success("Rules updated successfully");
        } catch (e) {
          toast.error("Error updating Rules");
        }
      }}
    />
  );
};

export default EditRules;
