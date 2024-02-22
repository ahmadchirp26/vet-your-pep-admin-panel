"use client";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { type SubmitHandler } from "react-hook-form";
import { Form } from "@/components/ui/form";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// form zod validation schema
const rulesFormSchema = z.object({
  title: z.string().min(1, { message: "Rules title is required" }),
  rules: z.string().min(1, { message: "Rules Description required" }),
});

// generate form types from zod validation schema
type RulesFormTypes = z.infer<typeof rulesFormSchema>;

interface Props {
  id?: string;
  rule?: RulesFormTypes;
  submitHandler: SubmitHandler<RulesFormTypes>;
}
// main channel form component for create and update channel
export default function RuleForm({ id, rule, submitHandler }: Props) {
  return (
    <Form<RulesFormTypes>
      validationSchema={rulesFormSchema}
      onSubmit={submitHandler}
      useFormProps={{
        defaultValues: {
          ...rule,
        },
      }}
      className="isomorphic-form flex flex-grow flex-col @container"
    >
      {({ register, control, formState: { errors, isSubmitting } }) => (
        <>
          {console.log(errors)}
          <div className="flex-grow space-y-5 pb-10">
            <div className={"grid grid-cols-2 gap-5"}>
              <Input
                label="Title"
                placeholder="Rule title"
                {...register("title")}
                error={errors.title?.message}
              />
            </div>

            <div>
              <Textarea
                label="Rules"
                placeholder="Enter platform rules"
                {...register("rules")}
                error={errors.rules?.message}
                textareaClassName="h-20"
                className="col-span-2"
              />
            </div>
          </div>

          <div
            className={
              "sticky bottom-0 z-40 flex items-center justify-end gap-3 bg-gray-0/10 py-1 backdrop-blur @lg:gap-4 @xl:grid @xl:auto-cols-max @xl:grid-flow-col"
            }
          >
            <Button
              type="submit"
              isLoading={isSubmitting}
              className="w-full @xl:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
            >
              {id ? "Update" : "Create"} Rule
            </Button>
          </div>
        </>
      )}
    </Form>
  );
}
