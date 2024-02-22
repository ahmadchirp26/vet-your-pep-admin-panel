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
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  platFormRules?: Maybe<Array<PlatFormRules>>;
  profileImage?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
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
  about?: Maybe<Scalars['String']['output']>;
  backgroundImage?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  events?: Maybe<Array<Events>>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isPaid: Scalars['Boolean']['output'];
  members?: Maybe<Array<ChannelMember>>;
  moderator: Customer;
  moderatorId: Scalars['String']['output'];
  posts?: Maybe<Array<Post>>;
  price?: Maybe<Scalars['Float']['output']>;
  rules?: Maybe<Scalars['String']['output']>;
  status: ChannelStatus;
  title: Scalars['String']['output'];
  totalMembers?: Maybe<Scalars['Int']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type ChannelFilterInputs = {
  search?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ChannelMember = {
  __typename?: 'ChannelMember';
  channel: Channel;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  customer: Customer;
  id: Scalars['ID']['output'];
  paidStatus: Scalars['Boolean']['output'];
  roleChannel: ChannelUserRole;
  updatedBy?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
};

/** The status of channels */
export enum ChannelStatus {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

/** The status of ChannelUserRole */
export enum ChannelUserRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Moderator = 'MODERATOR'
}

export type Comments = {
  __typename?: 'Comments';
  content: Scalars['String']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  post: Post;
  updatedBy?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
  user: Customer;
};

export type CommentsFilterInputs = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAdminUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateChannelInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  backgroundImage?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  moderatorId: Scalars['String']['input'];
  rules?: InputMaybe<Scalars['String']['input']>;
  status?: ChannelStatus;
  title: Scalars['String']['input'];
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateChargeInput = {
  amount: Scalars['Int']['input'];
  customerId: Scalars['String']['input'];
  paymentMethodId: Scalars['String']['input'];
};

export type CreateCommentInput = {
  content: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type CreateCustomerInput = {
  cellPhone?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateEventInput = {
  channelId: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateLikeInput = {
  postId: Scalars['String']['input'];
};

export type CreatePlatFormRulesInput = {
  rules?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreatePostInput = {
  body: Scalars['String']['input'];
  channelId: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Customer = {
  __typename?: 'Customer';
  cellPhone?: Maybe<Scalars['String']['output']>;
  channelMembers?: Maybe<Array<Channel>>;
  channels?: Maybe<Array<Channel>>;
  comments?: Maybe<Array<Comments>>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  followers?: Maybe<Array<CustomerFollower>>;
  following?: Maybe<Array<CustomerFollower>>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  likes?: Maybe<Array<Likes>>;
  password: Scalars['String']['output'];
  posts?: Maybe<Array<Post>>;
  profileImage?: Maybe<Scalars['String']['output']>;
  socialProvider?: Maybe<SocialProvider>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  totalFollowers?: Maybe<Scalars['Int']['output']>;
  totalFollowings?: Maybe<Scalars['Int']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
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
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  followers?: Maybe<Customer>;
  following?: Maybe<Customer>;
  id: Scalars['ID']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type CustomerLoginOrRegisterResponse = {
  __typename?: 'CustomerLoginOrRegisterResponse';
  accessToken: Scalars['String']['output'];
  user: Customer;
};

export type EventFilterInputs = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Events = {
  __typename?: 'Events';
  channel: Channel;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type Likes = {
  __typename?: 'Likes';
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  post?: Maybe<Post>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<Customer>;
};

export type ListChannelsInput = {
  filter?: InputMaybe<ChannelFilterInputs>;
  joined?: InputMaybe<Scalars['Boolean']['input']>;
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

export type ListCommentsInput = {
  filter?: InputMaybe<CommentsFilterInputs>;
  limit: Scalars['Float']['input'];
  offset?: InputMaybe<Scalars['Float']['input']>;
};

export type ListCommentsResponse = {
  __typename?: 'ListCommentsResponse';
  limit: Scalars['Float']['output'];
  offset?: Maybe<Scalars['Float']['output']>;
  results: Array<Comments>;
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

export type ListEventsInput = {
  filter?: InputMaybe<EventFilterInputs>;
  limit: Scalars['Float']['input'];
  offset?: InputMaybe<Scalars['Float']['input']>;
};

export type ListEventsResponse = {
  __typename?: 'ListEventsResponse';
  limit: Scalars['Float']['output'];
  offset?: Maybe<Scalars['Float']['output']>;
  results: Array<Events>;
  totalRows?: Maybe<Scalars['Float']['output']>;
};

export type ListPlatFormRulesInput = {
  filter?: InputMaybe<PlatFormRulesFilterInputs>;
  limit: Scalars['Float']['input'];
  offset?: InputMaybe<Scalars['Float']['input']>;
};

export type ListPlatFormRulesResponse = {
  __typename?: 'ListPlatFormRulesResponse';
  limit: Scalars['Float']['output'];
  offset?: Maybe<Scalars['Float']['output']>;
  results: Array<PlatFormRules>;
  totalRows?: Maybe<Scalars['Float']['output']>;
};

export type ListPostsInput = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilterInputs>;
  limit: Scalars['Float']['input'];
  myPosts?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  userFeed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ListPostsResponse = {
  __typename?: 'ListPostsResponse';
  limit: Scalars['Float']['output'];
  offset?: Maybe<Scalars['Float']['output']>;
  results: Array<Post>;
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
  /** This will create new Comment */
  createComment: SuccessResponse;
  /** This will signup new Customers */
  createCustomer: CustomerLoginOrRegisterResponse;
  /** This will create new Event */
  createEvent: SuccessResponse;
  /** Create new plate form rules */
  createPlatFormRule: PlatFormRules;
  /** This will create new Post */
  createPost: SuccessResponse;
  /** This will follow a customer */
  followCustomer: SuccessResponse;
  /** To Join new Channel */
  joinChannel: SuccessResponse;
  /** This will create new Channel */
  leaveChannel: SuccessResponse;
  /** This will create new Like on Post */
  likePost: Likes;
  /** Admin Login */
  loginAsAdmin: AdminLoginResponse;
  /** Customer Login */
  loginAsCustomer: CustomerLoginOrRegisterResponse;
  /** This will save/update user profile image in DB */
  saveCustomerMediaUrl: Scalars['String']['output'];
  /** This will charge the Customer on test stripe */
  testCharge: SuccessResponse;
  /** This will unfollow a customer */
  unfollowCustomer: SuccessResponse;
  /** This will unlike Post */
  unlikePost: Likes;
  /** Update admin data */
  updateAdminData: Scalars['String']['output'];
  /** Update admin email */
  updateAdminEmail: AdminEmailUpdateResponse;
  /** This will update Admin Password */
  updateAdminPassword: SuccessResponse;
  /** This will update Channel */
  updateChannel: SuccessResponse;
  /** This will update new Comment */
  updateComment: SuccessResponse;
  /** This will update Customer */
  updateCustomer: Customer;
  /** Update customer email */
  updateCustomerEmail: CustomerEmailUpdateResponse;
  /** This will update Customer Password */
  updateCustomerPassword: SuccessResponse;
  /** This will update Event */
  updateEvent: SuccessResponse;
  /** This will update Event */
  updatePlatFormRule: PlatFormRules;
  /** This will update new Post */
  updatePost: SuccessResponse;
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


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreateEventArgs = {
  input: CreateEventInput;
};


export type MutationCreatePlatFormRuleArgs = {
  input: CreatePlatFormRulesInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationFollowCustomerArgs = {
  customerId: Scalars['String']['input'];
};


export type MutationJoinChannelArgs = {
  channelId: Scalars['String']['input'];
};


export type MutationLeaveChannelArgs = {
  input: UpdateChannelInput;
};


export type MutationLikePostArgs = {
  input: CreateLikeInput;
};


export type MutationLoginAsAdminArgs = {
  input: LoginAdminInput;
};


export type MutationLoginAsCustomerArgs = {
  input: LoginCustomerInput;
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


export type MutationUnlikePostArgs = {
  input: UpdateLikeInput;
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


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
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


export type MutationUpdateEventArgs = {
  input: UpdateEventInput;
};


export type MutationUpdatePlatFormRuleArgs = {
  input: UpdatePlatFormRulesInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};

export type OtherCustomerDataResponse = {
  __typename?: 'OtherCustomerDataResponse';
  isFollowing: Scalars['Boolean']['output'];
  user: Customer;
};

export type PageData = {
  __typename?: 'PageData';
  count: Scalars['Int']['output'];
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
};

export type PartialEventResponse = {
  __typename?: 'PartialEventResponse';
  results: Array<Events>;
};

export type PlatFormRules = {
  __typename?: 'PlatFormRules';
  admin: Admin;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  rules: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type PlatFormRulesFilterInputs = {
  search?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String']['output'];
  channel: Channel;
  comments?: Maybe<Array<Comments>>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  customer: Customer;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  likeCount?: Maybe<Scalars['Int']['output']>;
  likes?: Maybe<Array<Likes>>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type PostFilterInputs = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** To get a Channel */
  getChannelById: Channel;
  /** Get S3 bucket Signed Url */
  getChannelUploadUrl: S3SignedUrlResponse;
  /** The List of Channels user have joined or not with Pagination and filters */
  getChannels: ListChannelsResponse;
  /** Get Session Token for Chat SDK */
  getChatToken: Scalars['String']['output'];
  /** The List of comments with Pagination and filters */
  getComments: ListCommentsResponse;
  /** Get the Customer */
  getCustomerData: Customer;
  /** Get S3 bucket Signed Url */
  getCustomerUploadUrl: S3SignedUrlResponse;
  /** The List of Customers with Pagination and filters */
  getCustomersAdmin: ListCustomersResponse;
  /** To get a an event */
  getEventById: Events;
  /** Get S3 bucket Signed Url */
  getEventUploadUrls: Array<S3SignedUrlResponse>;
  /** The List of events with Pagination and filters */
  getEvents: ListEventsResponse;
  /** The List of events by channelId */
  getEventsByChannel: PartialEventResponse;
  /** Get the followers of the authenticated customer */
  getFollowers: Array<Customer>;
  /** Get the following of the authenticated customer */
  getFollowing: Array<Customer>;
  /** Get other Customer Data */
  getOtherCustomerData: OtherCustomerDataResponse;
  /** The List of PlatForm rules Pagination and filters */
  getPlatFormRules: ListPlatFormRulesResponse;
  /** To get a platform rules */
  getPlatFormRulesById: PlatFormRules;
  /** Get S3 bucket Signed Url */
  getPostUploadUrls: Array<S3SignedUrlResponse>;
  /** The List of posts with Pagination and filters */
  getPosts: ListPostsResponse;
  /** The List of Customers with filters */
  searchCustomers: SearchCustomersResponse;
  /** check if email already exist */
  validEmailAdmin: SuccessResponse;
};


export type QueryGetChannelByIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetChannelsArgs = {
  input: ListChannelsInput;
};


export type QueryGetCommentsArgs = {
  input: ListCommentsInput;
};


export type QueryGetCustomersAdminArgs = {
  input: ListCustomersInputs;
};


export type QueryGetEventByIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetEventUploadUrlsArgs = {
  count: Scalars['Float']['input'];
};


export type QueryGetEventsArgs = {
  input: ListEventsInput;
};


export type QueryGetEventsByChannelArgs = {
  channelId: Scalars['String']['input'];
};


export type QueryGetFollowersArgs = {
  customerId: Scalars['String']['input'];
};


export type QueryGetFollowingArgs = {
  customerId: Scalars['String']['input'];
};


export type QueryGetOtherCustomerDataArgs = {
  customerId: Scalars['String']['input'];
};


export type QueryGetPlatFormRulesArgs = {
  input: ListPlatFormRulesInput;
};


export type QueryGetPlatFormRulesByIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetPostUploadUrlsArgs = {
  count: Scalars['Float']['input'];
};


export type QueryGetPostsArgs = {
  input: ListPostsInput;
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
  profileImage?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateChannelInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  backgroundImage?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  rules?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type UpdateCommentInput = {
  commentId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type UpdateCustomerInput = {
  cellPhone?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEventInput = {
  channelId: Scalars['String']['input'];
  eventId: Scalars['ID']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type UpdateLikeInput = {
  postId: Scalars['String']['input'];
};

export type UpdatePlatFormRulesInput = {
  platFormRulesId: Scalars['ID']['input'];
  rules?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type UpdatePostInput = {
  body: Scalars['String']['input'];
  channelId: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  postId: Scalars['ID']['input'];
};

export type LoginMutationVariables = Exact<{
  input: LoginAdminInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', loginAsAdmin: { __typename?: 'AdminLoginResponse', accessToken: string, user: { __typename?: 'Admin', id: string, email: string, firstName: string, lastName: string } } };

export type CreateChannelMutationVariables = Exact<{
  input: CreateChannelInput;
}>;


export type CreateChannelMutation = { __typename?: 'Mutation', createChannel: { __typename?: 'SuccessResponse', message?: string | null } };

export type GetChannelIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetChannelIdQuery = { __typename?: 'Query', getChannelById: { __typename?: 'Channel', id: string, backgroundImage?: string | null, price?: number | null, rules?: string | null, status: ChannelStatus, title: string, about?: string | null, isPaid: boolean, moderator: { __typename?: 'Customer', firstName: string, email: string, lastName: string, id: string } } };

export type GetAllChannelsWithPaginationQueryVariables = Exact<{
  input: ListChannelsInput;
}>;


export type GetAllChannelsWithPaginationQuery = { __typename?: 'Query', getChannels: { __typename?: 'ListChannelsResponse', limit: number, offset?: number | null, totalRows?: number | null, results: Array<{ __typename?: 'Channel', id: string, backgroundImage?: string | null, price?: number | null, rules?: string | null, status: ChannelStatus, title: string, about?: string | null, isPaid: boolean }> } };

export type UpdateChannelMutationVariables = Exact<{
  input: UpdateChannelInput;
}>;


export type UpdateChannelMutation = { __typename?: 'Mutation', updateChannel: { __typename?: 'SuccessResponse', message?: string | null, success?: boolean | null } };

export type GetCustomersAdminQueryVariables = Exact<{
  input: ListCustomersInputs;
}>;


export type GetCustomersAdminQuery = { __typename?: 'Query', getCustomersAdmin: { __typename?: 'ListCustomersResponse', totalRows?: number | null, offset?: number | null, limit: number, results: Array<{ __typename?: 'Customer', cellPhone?: string | null, email: string, firstName: string, password: string, id: string, isActive?: boolean | null, lastName: string, stripeCustomerId?: string | null }> } };

export type SearchCustomersQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type SearchCustomersQuery = { __typename?: 'Query', searchCustomers: { __typename?: 'SearchCustomersResponse', message?: string | null, totalCount?: number | null, results?: Array<{ __typename?: 'Customer', id: string, firstName: string, lastName: string, email: string }> | null } };

export type CreatePlatFormRuleMutationVariables = Exact<{
  input: CreatePlatFormRulesInput;
}>;


export type CreatePlatFormRuleMutation = { __typename?: 'Mutation', createPlatFormRule: { __typename?: 'PlatFormRules', createdBy?: string | null, createdDate?: any | null, id: string, rules: string, title: string, updatedBy?: string | null, updatedDate?: any | null } };

export type GetPlatFormRulesByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetPlatFormRulesByIdQuery = { __typename?: 'Query', getPlatFormRulesById: { __typename?: 'PlatFormRules', createdBy?: string | null, createdDate?: any | null, id: string, rules: string, title: string, updatedBy?: string | null, updatedDate?: any | null } };

export type GetPlatFormRulesQueryVariables = Exact<{
  input: ListPlatFormRulesInput;
}>;


export type GetPlatFormRulesQuery = { __typename?: 'Query', getPlatFormRules: { __typename?: 'ListPlatFormRulesResponse', limit: number, offset?: number | null, totalRows?: number | null, results: Array<{ __typename?: 'PlatFormRules', createdBy?: string | null, createdDate?: any | null, id: string, rules: string, title: string, updatedBy?: string | null, updatedDate?: any | null }> } };

export type UpdatePlatFormRuleMutationVariables = Exact<{
  input: UpdatePlatFormRulesInput;
}>;


export type UpdatePlatFormRuleMutation = { __typename?: 'Mutation', updatePlatFormRule: { __typename?: 'PlatFormRules', createdBy?: string | null, createdDate?: any | null, id: string, rules: string, title: string, updatedBy?: string | null, updatedDate?: any | null } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginAsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const CreateChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<CreateChannelMutation, CreateChannelMutationVariables>;
export const GetChannelIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getChannelId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getChannelById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundImage"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rules"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"isPaid"}},{"kind":"Field","name":{"kind":"Name","value":"moderator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetChannelIdQuery, GetChannelIdQueryVariables>;
export const GetAllChannelsWithPaginationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllChannelsWithPagination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListChannelsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getChannels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"totalRows"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundImage"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rules"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"isPaid"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllChannelsWithPaginationQuery, GetAllChannelsWithPaginationQueryVariables>;
export const UpdateChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<UpdateChannelMutation, UpdateChannelMutationVariables>;
export const GetCustomersAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomersAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListCustomersInputs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCustomersAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalRows"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellPhone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"stripeCustomerId"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomersAdminQuery, GetCustomersAdminQueryVariables>;
export const SearchCustomersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchCustomers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCustomers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<SearchCustomersQuery, SearchCustomersQueryVariables>;
export const CreatePlatFormRuleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePlatFormRule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePlatFormRulesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlatFormRule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rules"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedDate"}}]}}]}}]} as unknown as DocumentNode<CreatePlatFormRuleMutation, CreatePlatFormRuleMutationVariables>;
export const GetPlatFormRulesByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlatFormRulesById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPlatFormRulesById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rules"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedDate"}}]}}]}}]} as unknown as DocumentNode<GetPlatFormRulesByIdQuery, GetPlatFormRulesByIdQueryVariables>;
export const GetPlatFormRulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlatFormRules"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListPlatFormRulesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPlatFormRules"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"totalRows"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rules"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedDate"}}]}}]}}]}}]} as unknown as DocumentNode<GetPlatFormRulesQuery, GetPlatFormRulesQueryVariables>;
export const UpdatePlatFormRuleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePlatFormRule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePlatFormRulesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlatFormRule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rules"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedDate"}}]}}]}}]} as unknown as DocumentNode<UpdatePlatFormRuleMutation, UpdatePlatFormRuleMutationVariables>;