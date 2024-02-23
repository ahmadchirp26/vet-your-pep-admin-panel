"use client";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { type SubmitHandler, Controller } from "react-hook-form";
import { Form } from "@/components/ui/form";
import React from "react";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import BannerForm from "./BannerForm";
import AttachmentSchema from "@/lib/zod-schemas/attachment";
import { FieldError } from "@/components/ui/field-error";
import SelectChannel from "./SelectChannel";

// form zod validation schema
const channelFormSchema = z.object({
  title: z.string().min(1, { message: "Event name is required" }),
  date: z.string().min(1, { message: "Event date is required" }),
  time: z.string().min(1, { message: "Event time is required" }),
  text: z.string().min(1, { message: "Event Details is required" }),

  media: z.object({
    bannerImage: AttachmentSchema.optional().nullable(),
  }),

  channel: z.object(
    {
      id: z.string(),
      title: z.string(),
    },
    {
      //Todo: Document this way of making custom error messages
      required_error: "Channel is required",
    },
  ),
});

// generate form types from zod validation schema
type ChannelFormTypes = z.infer<typeof channelFormSchema>;

interface Props {
  id?: string;
  channel?: ChannelFormTypes;
  readOnlyFields?: Array<keyof ChannelFormTypes>;
  submitHandler: SubmitHandler<ChannelFormTypes>;
}
// main channel form component for create and update channel
export default function EventForm({
  id,
  channel,
  submitHandler,
  readOnlyFields = [],
}: Props) {
  return (
    <Form<ChannelFormTypes>
      validationSchema={channelFormSchema}
      onSubmit={submitHandler}
      resetValues={{
        ...event,
      }}
      useFormProps={{
        defaultValues: {
          ...event,
        },
      }}
      className="isomorphic-form flex flex-grow flex-col @container"
    >
      {({ register, control, formState: { errors, isSubmitting } }) => (
        <>
          {console.log(errors)}
          <div className="flex-grow space-y-5 pb-10">
            <Controller
              name="media"
              control={control}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <div className={"space-y-1"}>
                  <BannerForm
                    bannerImage={value?.bannerImage ?? undefined}
                    onChangeBannerImage={(file) => {
                      onChange({
                        ...value,
                        bannerImage: file,
                      });
                    }}
                  />
                  {errors.media && (
                    <FieldError error={errors.media.bannerImage?.message} />
                  )}
                </div>
              )}
            />
            <div className={"grid grid-cols-2 gap-5"}>
              <Input
                label="Title"
                placeholder="Event title"
                {...register("title")}
                error={errors.title?.message}
              />

              <Controller
                name="channel"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <SelectChannel
                    label={"Select Channel"}
                    placeholder={"Search for a channel"}
                    onChange={onChange}
                    value={value}
                    error={errors?.channel?.message}
                    isRequired={true}
                    // disabled={readOnlyFields.includes("channel")}
                  />
                )}
              />
            </div>
            <div className={"grid grid-cols-2 gap-5"}>
              <Input
                type="date"
                label="Date"
                placeholder="Event Date"
                {...register("date")}
                error={errors.date?.message}
              />
              <Input
                type="time"
                label="Time"
                placeholder="Event Time"
                {...register("time")}
                error={errors.time?.message}
              />
            </div>
            <div>
              <Textarea
                label="Description"
                placeholder="Enter your Event Details"
                {...register("text")}
                disabled={readOnlyFields.includes("text")}
                readOnly={readOnlyFields.includes("text")}
                error={errors.text?.message}
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
              {id ? "Update" : "Create"} Event
            </Button>
          </div>
        </>
      )}
    </Form>
  );
}
