/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  idAdminUser: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  mediaUrl?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
};

export type AdminEmailUpdateResponse = {
  __typename?: 'AdminEmailUpdateResponse';
  accessToken: Scalars['String']['output'];
  user: Admin;
};

export type AdminLoginResponse = {
  __typename?: 'AdminLoginResponse';
  accessToken: Scalars['String']['output'];
  user: Admin;
};

export type Channel = {
  __typename?: 'Channel';
  channelBackgroundImage?: Maybe<Scalars['String']['output']>;
  channelImage?: Maybe<Scalars['String']['output']>;
  channelPrice?: Maybe<Scalars['Float']['output']>;
  channelRules?: Maybe<Scalars['String']['output']>;
  channelStatus: ChannelStatus;
  channelTitle: Scalars['String']['output'];
  channelsAbout?: Maybe<Scalars['String']['output']>;
  idChannel: Scalars['ID']['output'];
  isChannelPaid: Scalars['Boolean']['output'];
  refIdModerator: Scalars['String']['output'];
};

export type ChannelFilterInputs = {
  channelTitle?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** The status of channels */
export enum ChannelStatus {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CreateAdminUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateChannelInput = {
  channelRules?: InputMaybe<Scalars['String']['input']>;
  channelStatus?: ChannelStatus;
  channelTitle: Scalars['String']['input'];
  channelsAbout?: InputMaybe<Scalars['String']['input']>;
  refIdModerator: Scalars['String']['input'];
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateChargeInput = {
  amount: Scalars['Int']['input'];
  customerId: Scalars['String']['input'];
  paymentMethodId: Scalars['String']['input'];
};

export type CreateCustomerInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  cellPhone?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  followers?: Maybe<Array<CustomerFollower>>;
  following?: Maybe<Array<CustomerFollower>>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  mediaUrl?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  role: UserRole;
  socialProvider?: Maybe<SocialProvider>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  totalFollowers?: Maybe<Scalars['Int']['output']>;
  totalFollowings?: Maybe<Scalars['Int']['output']>;
};

export type CustomerEmailUpdateResponse = {
  __typename?: 'CustomerEmailUpdateResponse';
  accessToken: Scalars['String']['output'];
  user: Customer;
};

export type CustomerFilterInput = {
  cellPhone?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerFollower = {
  __typename?: 'CustomerFollower';
  followers?: Maybe<Customer>;
  following?: Maybe<Customer>;
  id: Scalars['Int']['output'];
};

export type CustomerLoginOrRegisterResponse = {
  __typename?: 'CustomerLoginOrRegisterResponse';
  accessToken: Scalars['String']['output'];
  user: Customer;
};

export type ListChannelsInput = {
  filter?: InputMaybe<ChannelFilterInputs>;
  limit: Scalars['Float']['input'];
  offset?: InputMaybe<Scalars['Float']['input']>;
};

export type ListChannelsResponse = {
  __typename?: 'ListChannelsResponse';
  limit: Scalars['Float']['output'];
  offset?: Maybe<Scalars['Float']['output']>;
  results: Array<Channel>;
  totalRows?: Maybe<Scalars['Float']['output']>;
};

export type ListCustomersInputs = {
  filter?: InputMaybe<CustomerFilterInput>;
  limit: Scalars['Float']['input'];
  offset?: InputMaybe<Scalars['Float']['input']>;
};

export type ListCustomersResponse = {
  __typename?: 'ListCustomersResponse';
  limit: Scalars['Float']['output'];
  offset?: Maybe<Scalars['Float']['output']>;
  results: Array<Customer>;
  totalRows?: Maybe<Scalars['Float']['output']>;
};

export type LoginAdminInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginCustomerInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Customer Social Registration */
  continueWithSocialSite: CustomerLoginOrRegisterResponse;
  /** Create new admin user */
  createAdminUser: SuccessResponse;
  /** This will create new Channel */
  createChannel: SuccessResponse;
  /** This will signup new Customers */
  createCustomer: CustomerLoginOrRegisterResponse;
  /** This will follow a customer */
  followCustomer: SuccessResponse;
  /** This will create new Channel */
  joinChannel: SuccessResponse;
  /** Admin Login */
  loginAsAdmin: AdminLoginResponse;
  /** Customer Login */
  loginAsCustomer: CustomerLoginOrRegisterResponse;
  /** This will a customer to moderator */
  makeModerator: SuccessResponse;
  /** This will save/update user profile image in DB */
  saveCustomerMediaUrl: Scalars['String']['output'];
  /** This will charge the Customer on test stripe */
  testCharge: SuccessResponse;
  /** This will unfollow a customer */
  unfollowCustomer: SuccessResponse;
  /** Update admin data */
  updateAdminData: Scalars['String']['output'];
  /** Update admin email */
  updateAdminEmail: AdminEmailUpdateResponse;
  /** This will update Admin Password */
  updateAdminPassword: SuccessResponse;
  /** This will create new Channel */
  updateChannel: SuccessResponse;
  /** This will update Customer */
  updateCustomer: Customer;
  /** Update customer email */
  updateCustomerEmail: CustomerEmailUpdateResponse;
  /** This will update Customer Password */
  updateCustomerPassword: SuccessResponse;
};


export type MutationContinueWithSocialSiteArgs = {
  input: RegisterOrLoginSocialInput;
};


export type MutationCreateAdminUserArgs = {
  input: CreateAdminUserInput;
};


export type MutationCreateChannelArgs = {
  input: CreateChannelInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationFollowCustomerArgs = {
  customerId: Scalars['String']['input'];
};


export type MutationJoinChannelArgs = {
  idChannel: Scalars['String']['input'];
};


export type MutationLoginAsAdminArgs = {
  input: LoginAdminInput;
};


export type MutationLoginAsCustomerArgs = {
  input: LoginCustomerInput;
};


export type MutationMakeModeratorArgs = {
  input: Scalars['String']['input'];
};


export type MutationSaveCustomerMediaUrlArgs = {
  fileName: Scalars['String']['input'];
};


export type MutationTestChargeArgs = {
  chargeInput: CreateChargeInput;
};


export type MutationUnfollowCustomerArgs = {
  customerId: Scalars['String']['input'];
};


export type MutationUpdateAdminDataArgs = {
  input: UpdateAdminUserInput;
};


export type MutationUpdateAdminEmailArgs = {
  input: Scalars['String']['input'];
};


export type MutationUpdateAdminPasswordArgs = {
  password: Scalars['String']['input'];
};


export type MutationUpdateChannelArgs = {
  input: UpdateChannelInput;
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateCustomerEmailArgs = {
  input: Scalars['String']['input'];
};


export type MutationUpdateCustomerPasswordArgs = {
  password: Scalars['String']['input'];
};

export type PageData = {
  __typename?: 'PageData';
  count: Scalars['Int']['output'];
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** The List of Channel with Pagination and filters */
  getAllChannelsWithPagination: ListChannelsResponse;
  /** Get S3 bucket Signed Url */
  getChannelsUploadUrl: S3SignedUrlResponse;
  /** Get the Customer */
  getCustomerData: Customer;
  /** Get S3 bucket Signed Url */
  getCustomerUploadUrl: S3SignedUrlResponse;
  /** The List of Customers with Pagination and filters */
  getCustomersAdmin: ListCustomersResponse;
  /** Get the followers of the authenticated customer */
  getFollowers: Array<Customer>;
  /** Get the followers of the authenticated customer */
  getFollowingTo: Array<Customer>;
  /** The List of Customers with filters */
  searchCustomers: SearchCustomersResponse;
  /** check if email already exist */
  validEmailAdmin: SuccessResponse;
};


export type QueryGetAllChannelsWithPaginationArgs = {
  input: ListChannelsInput;
};


export type QueryGetCustomersAdminArgs = {
  input: ListCustomersInputs;
};


export type QuerySearchCustomersArgs = {
  search: Scalars['String']['input'];
};


export type QueryValidEmailAdminArgs = {
  input: Scalars['String']['input'];
};

export type RegisterOrLoginSocialInput = {
  accessToken: Scalars['String']['input'];
  provider: SocialAuthProviders;
};

export type S3SignedUrlResponse = {
  __typename?: 'S3SignedUrlResponse';
  fileName: Scalars['String']['output'];
  signedUrl: Scalars['String']['output'];
};

export type SearchCustomersResponse = {
  __typename?: 'SearchCustomersResponse';
  message?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<Customer>>;
  totalCount?: Maybe<Scalars['Float']['output']>;
};

/** Social provider types */
export enum SocialAuthProviders {
  Google = 'GOOGLE'
}

export type SocialProvider = {
  __typename?: 'SocialProvider';
  createdDate: Scalars['DateTime']['output'];
  customer: Customer;
  id: Scalars['ID']['output'];
  provider: SocialAuthProviders;
  socialId: Scalars['String']['output'];
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateAdminUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateChannelInput = {
  channelRules?: InputMaybe<Scalars['String']['input']>;
  channelTitle: Scalars['String']['input'];
  channelsAbout?: InputMaybe<Scalars['String']['input']>;
  idChannel: Scalars['ID']['input'];
};

export type UpdateCustomerInput = {
  cellPhone?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
};

/** The role of Users */
export enum UserRole {
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type LoginMutationVariables = Exact<{
  input: LoginAdminInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', loginAsAdmin: { __typename?: 'AdminLoginResponse', accessToken: string, user: { __typename?: 'Admin', idAdminUser: string, email: string, firstName: string, lastName: string } } };

export type CreateChannelMutationVariables = Exact<{
  input: CreateChannelInput;
}>;


export type CreateChannelMutation = { __typename?: 'Mutation', createChannel: { __typename?: 'SuccessResponse', message?: string | null } };

export type GetAllChannelsWithPaginationQueryVariables = Exact<{
  input: ListChannelsInput;
}>;


export type GetAllChannelsWithPaginationQuery = { __typename?: 'Query', getAllChannelsWithPagination: { __typename?: 'ListChannelsResponse', limit: number, offset?: number | null, totalRows?: number | null, results: Array<{ __typename?: 'Channel', channelBackgroundImage?: string | null, channelImage?: string | null, channelPrice?: number | null, channelRules?: string | null, channelStatus: ChannelStatus, channelTitle: string, channelsAbout?: string | null, idChannel: string, isChannelPaid: boolean, refIdModerator: string }> } };

export type GetCustomersAdminQueryVariables = Exact<{
  input: ListCustomersInputs;
}>;


export type GetCustomersAdminQuery = { __typename?: 'Query', getCustomersAdmin: { __typename?: 'ListCustomersResponse', totalRows?: number | null, offset?: number | null, limit: number, results: Array<{ __typename?: 'Customer', cellPhone?: string | null, email: string, firstName: string, password: string, id: string, isActive?: boolean | null, lastName: string, role: UserRole, stripeCustomerId?: string | null }> } };

export type SearchCustomersQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type SearchCustomersQuery = { __typename?: 'Query', searchCustomers: { __typename?: 'SearchCustomersResponse', message?: string | null, totalCount?: number | null, results?: Array<{ __typename?: 'Customer', id: string, firstName: string, lastName: string, email: string }> | null } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginAsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idAdminUser"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const CreateChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<CreateChannelMutation, CreateChannelMutationVariables>;
export const GetAllChannelsWithPaginationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllChannelsWithPagination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListChannelsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllChannelsWithPagination"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"totalRows"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelBackgroundImage"}},{"kind":"Field","name":{"kind":"Name","value":"channelImage"}},{"kind":"Field","name":{"kind":"Name","value":"channelPrice"}},{"kind":"Field","name":{"kind":"Name","value":"channelRules"}},{"kind":"Field","name":{"kind":"Name","value":"channelStatus"}},{"kind":"Field","name":{"kind":"Name","value":"channelTitle"}},{"kind":"Field","name":{"kind":"Name","value":"channelsAbout"}},{"kind":"Field","name":{"kind":"Name","value":"idChannel"}},{"kind":"Field","name":{"kind":"Name","value":"isChannelPaid"}},{"kind":"Field","name":{"kind":"Name","value":"refIdModerator"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllChannelsWithPaginationQuery, GetAllChannelsWithPaginationQueryVariables>;
export const GetCustomersAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomersAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListCustomersInputs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCustomersAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalRows"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellPhone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"stripeCustomerId"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomersAdminQuery, GetCustomersAdminQueryVariables>;
export const SearchCustomersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchCustomers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCustomers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<SearchCustomersQuery, SearchCustomersQueryVariables>;