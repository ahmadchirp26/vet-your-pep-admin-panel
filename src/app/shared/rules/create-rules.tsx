"use client";
import RuleForm from "./rules-list/rules-form";
import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";
import toast from "react-hot-toast";
import useCreateRulesMutation from "@/api/PlatformRules/useCreateRulesMutation";

const CreateRules = () => {
  const { mutateAsync } = useCreateRulesMutation();
  const router = useRouter();
  return (
    <RuleForm
      submitHandler={async (data) => {
        try {
          await mutateAsync({
            input: {
              title: data.title,
              rules: data.rules,
            },
          });
          toast.success("Rules created successfully");
          router.push(routes.rules.list);
        } catch (e) {
          toast.error("Error creating rules");
        }
      }}
    />
  );
};

export default CreateRules;
