import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { graphql } from "@/lib/react-query-graphql";
import { useQuery } from "@tanstack/react-query";
import { channelKeys } from "./query-keys";

const GET_CHANNEL_DOCUMENT = graphql(`
  #graphql
  query getChannelId($input: String!) {
    getChannelById(input: $input) {
      id
      backgroundImage
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

const useGetChannel = ({id}:{id:string}) => {
    const queryProtectedHandler = useGraphQLRequestHandlerProtected()
    return useQuery({
        queryKey:channelKeys.get(id),
        queryFn: ({ queryKey }) => {
           console.log(queryKey)
            return queryProtectedHandler(GET_CHANNEL_DOCUMENT, {
                input: queryKey[1],
            })
        },
    })

}
export default useGetChannel