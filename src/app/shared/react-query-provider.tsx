"use client";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ClientError } from "graphql-request";
import React, { type PropsWithChildren } from "react";
import toast from "react-hot-toast";
import { Text } from "@/components/ui/text";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError(error) {
      if (error instanceof ClientError) {
        const firstError = error.response.errors?.find((e) => e.message);
        if (!firstError) return;
        toast.error(<Text tag="b">Something Went Wrong</Text>);
      }
    },
  }),
});

const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
