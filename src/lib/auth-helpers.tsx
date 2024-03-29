import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";
import { type Variables } from "graphql-request";
import {
  type ClientError,
  type VariablesAndRequestHeadersArgs,
} from "graphql-request/build/esm/types";
import {
  graphQlRequestHandler,
  useGraphQLMutation,
  useGraphQLQuery,
} from "@/lib/react-query-graphql";
import { type TypedDocumentNode } from "@graphql-typed-document-node/core";

function useGraphQLQueryProtected<T, D>(
  ...params: Parameters<typeof useGraphQLQuery<T, D>>
) {
  const [queryOptions, document, variables] = params;
  const { data } = useAuthSessionContext();
  const authourizationHeaders = new Headers({
    Authorization: `Bearer ${data?.accessToken}`,
  });
  return useGraphQLQuery(
    queryOptions,
    document,
    variables,
    authourizationHeaders,
  );
}

function useGraphQLMutationProtected<
  T,
  D extends Variables,
  E = ClientError,
  C = unknown,
>(...params: Parameters<typeof useGraphQLMutation<T, D, E, C>>) {
  const { data } = useAuthSessionContext();
  const authourizationHeaders = new Headers({
    Authorization: `Bearer ${data?.accessToken}`,
  });
  const { mutate, mutateAsync, ...rest } = useGraphQLMutation<T, D, E, C>(
    ...params,
  );

  // console.log("useGraphQLMutationProtected Variables:", params);

  return {
    ...rest,
    mutate: (variables: D, options?: Parameters<typeof mutate>[1]) =>
      mutate(
        [
          variables,
          authourizationHeaders,
        ] as unknown as VariablesAndRequestHeadersArgs<D>,
        options,
      ),
    mutateAsync: (variables: D, options?: Parameters<typeof mutateAsync>[1]) =>
      mutateAsync(
        [
          variables,
          authourizationHeaders,
        ] as unknown as VariablesAndRequestHeadersArgs<D>,
        options,
      ),
  };
}

export const useGraphQLRequestHandlerProtected = () => {
  const { data } = useAuthSessionContext();
  const authourizationHeaders = new Headers({
    Authorization: `Bearer ${data?.accessToken}`,
  });
  return <TResult, TVariables extends Variables>(
    document: TypedDocumentNode<TResult, TVariables>,
    variables: TVariables,
  ) => graphQlRequestHandler(document, variables, authourizationHeaders);
};
export { useGraphQLQueryProtected, useGraphQLMutationProtected };
