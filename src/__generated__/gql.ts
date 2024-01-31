/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  #graphql\n  mutation Login($input: LoginAdminInput!) {\n    loginAsAdmin(input: $input) {\n      accessToken\n      user {\n        idAdminUser\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  query getAllChannelsWithPagination($input: ListChannelsInputs!) {\n    getAllChannelsWithPagination(input: $input) {\n      limit\n      offset\n      totalRows\n      results {\n        channelPrice\n        channelStatus\n        channelsAbout\n        channelsBackgroundImage\n        channelsImage\n        channelsRule\n        channelsTitle\n        idChannel\n        paidStatusEnum\n        refIdModerator\n      }\n    }\n  }\n": types.GetAllChannelsWithPaginationDocument,
    "\n  query GetCustomersAdmin($input: ListCustomersInputs!) {\n    getCustomersAdmin(input: $input) {\n      totalRows\n      offset\n      limit\n      results {\n        cellPhone\n        email\n        firstName\n        password\n        id\n        isActive\n        lastName\n        role\n        stripeCustomerId\n      }\n    }\n  }\n": types.GetCustomersAdminDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation Login($input: LoginAdminInput!) {\n    loginAsAdmin(input: $input) {\n      accessToken\n      user {\n        idAdminUser\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation Login($input: LoginAdminInput!) {\n    loginAsAdmin(input: $input) {\n      accessToken\n      user {\n        idAdminUser\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllChannelsWithPagination($input: ListChannelsInputs!) {\n    getAllChannelsWithPagination(input: $input) {\n      limit\n      offset\n      totalRows\n      results {\n        channelPrice\n        channelStatus\n        channelsAbout\n        channelsBackgroundImage\n        channelsImage\n        channelsRule\n        channelsTitle\n        idChannel\n        paidStatusEnum\n        refIdModerator\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllChannelsWithPagination($input: ListChannelsInputs!) {\n    getAllChannelsWithPagination(input: $input) {\n      limit\n      offset\n      totalRows\n      results {\n        channelPrice\n        channelStatus\n        channelsAbout\n        channelsBackgroundImage\n        channelsImage\n        channelsRule\n        channelsTitle\n        idChannel\n        paidStatusEnum\n        refIdModerator\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCustomersAdmin($input: ListCustomersInputs!) {\n    getCustomersAdmin(input: $input) {\n      totalRows\n      offset\n      limit\n      results {\n        cellPhone\n        email\n        firstName\n        password\n        id\n        isActive\n        lastName\n        role\n        stripeCustomerId\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCustomersAdmin($input: ListCustomersInputs!) {\n    getCustomersAdmin(input: $input) {\n      totalRows\n      offset\n      limit\n      results {\n        cellPhone\n        email\n        firstName\n        password\n        id\n        isActive\n        lastName\n        role\n        stripeCustomerId\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;