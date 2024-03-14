"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";
import toast from "react-hot-toast";
import useGetRulesById from "@/api/PlatformRules/useGetPlatformRules";
import useUpdateRulesMutation from "@/api/PlatformRules/useUpdateRulesMutation";
import RuleForm from "./rules-list/rules-form";

type Props = {
  id: string;
};

interface RuleFormData {
  title: string;
  rules: string;
  // ...other fields
}

const EditRules = ({ id }: Props) => {
  const { data, status, refetch } = useGetRulesById({
    id,
  });
  const { mutateAsync } = useUpdateRulesMutation();
  const router = useRouter();
  const [initialValues, setInitialValues] = useState({
    title: "",
    rules: "",
  });

  useEffect(() => {
    if (data?.getPlatFormRulesById) {
      setInitialValues({
        title: data.getPlatFormRulesById.title,
        rules: data.getPlatFormRulesById.rules,
      });
    }
  }, [data?.getPlatFormRulesById]);

  if (status === "pending") {
    return "Loading...";
  }
  if (status === "error") {
    return "Error";
  }

  const handleSubmit = async (data: RuleFormData) => {
    try {
      const updatedValues = Object.keys(data).reduce(
        (acc: Partial<RuleFormData>, key) => {
          if (
            data[key as keyof RuleFormData] !==
            initialValues[key as keyof RuleFormData]
          ) {
            acc[key as keyof RuleFormData] = data[key as keyof RuleFormData];
          }
          return acc;
        },
        {},
      );
      await mutateAsync({
        input: {
          ...updatedValues,
          platFormRulesId: id,
        },
      });
      toast.success("Rules updated successfully");
      await refetch();
      router.push(routes.rules.list);
    } catch (e) {
      toast.error("Error updating Rules");
    }
  };

  return (
    <RuleForm
      id={id}
      rule={{
        title: data?.getPlatFormRulesById.title,
        rules: data?.getPlatFormRulesById.rules,
      }}
      submitHandler={handleSubmit}
    />
  );
};

export default EditRules;
