import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { graphql } from "@/lib/react-query-graphql";
import { useQuery } from "@tanstack/react-query";
import { channelKeys } from "./query-keys";
import { env } from "@/env.mjs";

const GET_CHANNEL_DOCUMENT = graphql(`
  #graphql
  query getChannelId($input: String!) {
    getChannelById(input: $input) {
      id
      backgroundImage
      image
      price
      rules
      status
      title
      about
      isPaid
      moderator {
        firstName
        email
        lastName
        id
      }
    }
  }
`);

const useGetChannel = ({ id }: { id: string }) => {
  const queryProtectedHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: channelKeys.get(id),
    queryFn: ({ queryKey }) => {
      return queryProtectedHandler(GET_CHANNEL_DOCUMENT, {
        input: queryKey[2] ?? '',
      });
    },
    select(data) {
      return {
        ...data,
        getChannelById: {
          ...data.getChannelById,
          image: data.getChannelById.image ?
            `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${data.getChannelById.image}` :
            undefined,
          backgroundImage: data.getChannelById.backgroundImage
            ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${data.getChannelById.backgroundImage}`
            : undefined,
        },
      };
    },
  });
};
export default useGetChannel;
