import { useGraphQLMutationProtected } from "@/lib/auth-helpers";
import { graphql } from "@/lib/react-query-graphql";

const UPDATE_RULES_MUTATION = graphql(`
  #graphql
  mutation updateChannel($input: UpdateChannelInput!) {
    updateChannel(input: $input) {
      message
      success
    }
  }
`);

const useUpdateChannelMutation = () =>
  useGraphQLMutationProtected({}, UPDATE_RULES_MUTATION);

export default useUpdateChannelMutation;
