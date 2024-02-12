"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Password } from "@/components/ui/password";
import * as z from "zod";
import { useState } from "react";
import { PiArrowRightBold } from "react-icons/pi";
import { type SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "@/api/Authentication/useLoginMutation";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
  remember: z.boolean(),
});

type Login = z.infer<typeof loginSchema>;

const initialValues: Login = {
  email: "umerkhalid01@gmail.com",
  password: "12345678",
  remember: true,
};

export default function LoginInForm() {
  //TODO: why we need to reset it here
  const [reset] = useState({});
  const { mutateAsync } = useLoginMutation();

  const onSubmit: SubmitHandler<Login> = async (data) => {
    const { ...rest } = data;

    console.log(data);
    await mutateAsync([
      {
        input: {
          ...rest,
        },
      },
    ]);
    // setReset({ email: "", password: "", isRememberMe: false });
  };

  return (
    <>
      <Form<Login>
        validationSchema={loginSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5">
            <Input
              type="email"
              size="lg"
              label="Email"
              placeholder="Enter your email"
              color="info"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register("email")}
              error={errors.email?.message}
            />
            <Password
              label="Password"
              placeholder="Enter your password"
              size="lg"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              {...register("password")}
              error={errors.password?.message}
            />
            <div className="flex items-center justify-between pb-2">
              <Checkbox
                {...register("remember")}
                label="Remember Me"
                color="info"
                variant="flat"
                className="[&>label>span]:font-medium"
              />
            </div>
            <Button className="w-full" type="submit" size="lg" color="info">
              <span>Sign in</span>{" "}
              <PiArrowRightBold className="ms-2 mt-0.5 h-5 w-5" />
            </Button>
          </div>
        )}
      </Form>
    </>
  );
}
