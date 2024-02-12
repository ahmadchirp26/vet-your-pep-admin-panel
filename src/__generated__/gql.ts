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
    "\n  #graphql\n  mutation Login($input: LoginAdminInput!) {\n    loginAsAdmin(input: $input) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation createChannel($input: CreateChannelInput!) {\n    createChannel(input: $input) {\n      message\n    }\n  }\n": types.CreateChannelDocument,
    "\n  #graphql\n  query getChannelId($input: String!) {\n    getChannelById(input: $input) {\n      id\n      backgroundImage\n      price\n      rules\n      status\n      title\n      about\n      isPaid\n      moderator {\n        firstName\n        email\n        lastName\n        id\n      }\n    }\n  }\n": types.GetChannelIdDocument,
    "\n  #graphql\n  query getAllChannelsWithPagination($input: ListChannelsInput!) {\n    listChannels(input: $input) {\n      limit\n      offset\n      totalRows\n      results {\n        id\n        backgroundImage\n        price\n        rules\n        status\n        title\n        about\n        isPaid\n        # moderator {\n        #   id\n        #   firstName\n        #   profileImage\n        #   lastName\n        #   email\n        # }\n      }\n    }\n  }\n": types.GetAllChannelsWithPaginationDocument,
    "\n  #graphql\n  mutation updateChannel($input: UpdateChannelInput!) {\n    updateChannel(input: $input) {\n      message\n      success\n    }\n  }\n": types.UpdateChannelDocument,
    "\n  query GetCustomersAdmin($input: ListCustomersInputs!) {\n    getCustomersAdmin(input: $input) {\n      totalRows\n      offset\n      limit\n      results {\n        cellPhone\n        email\n        firstName\n        password\n        id\n        isActive\n        lastName\n        role\n        stripeCustomerId\n      }\n    }\n  }\n": types.GetCustomersAdminDocument,
    "\n  query searchCustomers($input: String!) {\n    searchCustomers(search: $input) {\n      message\n      results {\n        id\n        firstName\n        lastName\n        email\n      }\n      totalCount\n    }\n  }\n": types.SearchCustomersDocument,
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
export function graphql(source: "\n  #graphql\n  mutation Login($input: LoginAdminInput!) {\n    loginAsAdmin(input: $input) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation Login($input: LoginAdminInput!) {\n    loginAsAdmin(input: $input) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createChannel($input: CreateChannelInput!) {\n    createChannel(input: $input) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation createChannel($input: CreateChannelInput!) {\n    createChannel(input: $input) {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query getChannelId($input: String!) {\n    getChannelById(input: $input) {\n      id\n      backgroundImage\n      price\n      rules\n      status\n      title\n      about\n      isPaid\n      moderator {\n        firstName\n        email\n        lastName\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query getChannelId($input: String!) {\n    getChannelById(input: $input) {\n      id\n      backgroundImage\n      price\n      rules\n      status\n      title\n      about\n      isPaid\n      moderator {\n        firstName\n        email\n        lastName\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query getAllChannelsWithPagination($input: ListChannelsInput!) {\n    listChannels(input: $input) {\n      limit\n      offset\n      totalRows\n      results {\n        id\n        backgroundImage\n        price\n        rules\n        status\n        title\n        about\n        isPaid\n        # moderator {\n        #   id\n        #   firstName\n        #   profileImage\n        #   lastName\n        #   email\n        # }\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query getAllChannelsWithPagination($input: ListChannelsInput!) {\n    listChannels(input: $input) {\n      limit\n      offset\n      totalRows\n      results {\n        id\n        backgroundImage\n        price\n        rules\n        status\n        title\n        about\n        isPaid\n        # moderator {\n        #   id\n        #   firstName\n        #   profileImage\n        #   lastName\n        #   email\n        # }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation updateChannel($input: UpdateChannelInput!) {\n    updateChannel(input: $input) {\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation updateChannel($input: UpdateChannelInput!) {\n    updateChannel(input: $input) {\n      message\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCustomersAdmin($input: ListCustomersInputs!) {\n    getCustomersAdmin(input: $input) {\n      totalRows\n      offset\n      limit\n      results {\n        cellPhone\n        email\n        firstName\n        password\n        id\n        isActive\n        lastName\n        role\n        stripeCustomerId\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCustomersAdmin($input: ListCustomersInputs!) {\n    getCustomersAdmin(input: $input) {\n      totalRows\n      offset\n      limit\n      results {\n        cellPhone\n        email\n        firstName\n        password\n        id\n        isActive\n        lastName\n        role\n        stripeCustomerId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query searchCustomers($input: String!) {\n    searchCustomers(search: $input) {\n      message\n      results {\n        id\n        firstName\n        lastName\n        email\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query searchCustomers($input: String!) {\n    searchCustomers(search: $input) {\n      message\n      results {\n        id\n        firstName\n        lastName\n        email\n      }\n      totalCount\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;