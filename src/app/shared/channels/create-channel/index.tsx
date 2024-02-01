"use client";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { type SubmitHandler, Controller } from "react-hook-form";
import { Form } from "@/components/ui/form";
import React from "react";
import { Input } from "@/components/ui/input";
import Select from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { extractValuesAsEnum } from "@/utils/extract-values-as-enum";
import SelectModerator from "./SelectModerator";
import useCreateChannelMutation from "@/api/Channels/useCreateChannelMutation";
import { type ChannelStatus } from "@/__generated__/graphql";

// Channel Visibility Options
const visibilityOptions = [
  {
    value: "PUBLIC",
    name: "Public",
  },
  {
    value: "PRIVATE",
    name: "Private",
  },
];

// form zod validation schema
const channelFormSchema = z.object({
  title: z.string().min(1, { message: "Channel name is required" }),
  about: z.string().min(1, { message: "Channel description is required" }),
  rules: z.string().min(1, { message: "Channel rules is required" }),
  visibility: z
    .enum(extractValuesAsEnum(visibilityOptions)),
  moderator: z
    .object({
      id: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),

    }, {
      //Todo: Document this way of making custom error messages
      required_error : "Channel moderator is required"
    }),
  price: z.string().min(1, { message: "Channel price is required" }),
});

// generate form types from zod validation schema
type ChannelFormTypes = z.infer<typeof channelFormSchema>;

interface Props {
  id?: string;
  channel?: ChannelFormTypes;
}
// main channel form component for create and update channel
export default function CreateChannel({ id, channel }: Props) {
  const {mutate, status} = useCreateChannelMutation()

  const onSubmit: SubmitHandler<ChannelFormTypes> = (data) => {
    mutate({
      input:{
        channelTitle: data.title,
        channelsAbout: data.about,
        channelRules: data.rules,
        channelStatus: data.visibility as ChannelStatus,
        totalPrice: parseInt(data.price) ?? 0,
        refIdModerator: data.moderator.id,
      }
    })
  };

  return (
    <Form<ChannelFormTypes>
      validationSchema={channelFormSchema}
      onSubmit={onSubmit}
      useFormProps={{
        defaultValues: {
          ...channel,
          visibility: channel?.visibility?.toUpperCase() ?? 'PUBLIC',
        },
      }}
      className="isomorphic-form flex flex-grow flex-col @container"
    >
      {({ register, control, formState: { errors } }) => (
        <>
        {console.log(errors)}
          <div className="flex-grow space-y-5 pb-10">
            <div className={"grid grid-cols-2 gap-5"}>
              <Input
                label="Title"
                placeholder="Channel title"
                {...register("title")}
                error={errors.title?.message}
              />
              <Input
                label="Price"
                placeholder="10"
                error={errors?.price?.message}
                prefix={"$"}
                {...register("price")}
              />
              <Controller
                name="visibility"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    options={visibilityOptions}
                    value={value}
                    onChange={onChange}
                    label="Channel Visibility"
                    placeholder="Select visibility"
                    error={errors?.visibility?.message}
                    getOptionValue={(option) => option.value}
                    getOptionDisplayValue={(option) => option.name}
                    displayValue={(value) => {
                      const option = visibilityOptions.find(
                        (option) => option.value === value
                      );
                      return option?.name ?? "";
                    }}
                  />
                )}
              />
              <Controller
                name="moderator"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <SelectModerator
                    label={"Channel Moderator"}
                    placeholder={"Search for a moderator by email"}
                    onChange={onChange}
                    value={value}
                    error={errors?.moderator?.message}
                    isRequired={true}
                  />
                )}
              />
            </div>
            <div>
              <Textarea
                label="Description"
                placeholder="Enter your channel description"
                {...register("about")}
                error={errors.about?.message}
                textareaClassName="h-20"
                className="col-span-2"
              />
            </div>
            <div>
              <Textarea
                label="Rules"
                placeholder="Enter your channel rules"
                {...register("rules")}
                error={errors.about?.message}
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
              isLoading={status === 'pending'}
              className="w-full @xl:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
            >
              {id ? "Update" : "Create"} Channel
            </Button>
          </div>
        </>
      )}
    </Form>
  );
}
