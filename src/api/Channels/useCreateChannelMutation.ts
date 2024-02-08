import { useGraphQLMutationProtected } from "@/lib/auth-helpers";
import { graphql } from "@/lib/react-query-graphql";

const CREATE_CHANNEL_MUTATION = graphql(`
  mutation createChannel($input: CreateChannelInput!) {
    createChannel(input: $input) {
      message
    }
  }
`);

const useCreateChannelMutation = () => {
  return useGraphQLMutationProtected({}, CREATE_CHANNEL_MUTATION);
};

export default useCreateChannelMutation;
