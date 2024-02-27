import { useGraphQLMutationProtected } from "@/lib/auth-helpers";
import { graphql } from "@/lib/react-query-graphql";

const CREATE_EVENT_MUTATION = graphql(`
  mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
      message
      success
    }
  }
`);

const useCreateEventMutation = () => {
  return useGraphQLMutationProtected({}, CREATE_EVENT_MUTATION);
};

export default useCreateEventMutation;
