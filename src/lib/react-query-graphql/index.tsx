import {
  type UseQueryOptions,
  useQuery,
  type UseMutationOptions,
  useMutation
} from '@tanstack/react-query'
import request from 'graphql-request'
import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import {
  type VariablesAndRequestHeadersArgs,
  type GraphQLClientRequestHeaders,
  type Variables,
  type ClientError
} from 'graphql-request/build/esm/types'
import { env } from '@/env.mjs'
import { graphql } from '@/__generated__'

export function useGraphQLQuery<TResult, TVariables>(
  queryOptions: UseQueryOptions<TResult>,
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: Variables,
  requestHeaders?: GraphQLClientRequestHeaders
) {
  return useQuery({
    ...queryOptions,
    queryFn: async () => {
      return await request(env.NEXT_PUBLIC_SERVER_GRAPHQL_URL, document, variables, requestHeaders)
    }
  })
}

export function useGraphQLMutation<
  TResult,
  TVariables extends Variables,
  TError = ClientError,
  TContext = unknown
>(
  mutationOptions: UseMutationOptions<TResult, TError, VariablesAndRequestHeadersArgs<TVariables>, TContext>,
  document: TypedDocumentNode<TResult, TVariables>
) {
  return useMutation({
    ...mutationOptions,
    mutationFn: async variables => {
      return await request(env.NEXT_PUBLIC_SERVER_GRAPHQL_URL, document, ...variables)
    }
  })
}

export const graphQlRequestHandler = <TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: Variables,
  requestHeaders?: GraphQLClientRequestHeaders
) => request(env.NEXT_PUBLIC_SERVER_GRAPHQL_URL, document, variables, requestHeaders)

export async function requestGraphQl<TResult, TVariables extends Variables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables: VariablesAndRequestHeadersArgs<TVariables>,
) {
  return await request(
    env.NEXT_PUBLIC_SERVER_GRAPHQL_URL,
    document,
    ...variables,
  );
}
export { graphql }
