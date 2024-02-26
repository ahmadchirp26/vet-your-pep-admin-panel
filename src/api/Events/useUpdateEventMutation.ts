import { useGraphQLMutationProtected } from "@/lib/auth-helpers";
import { graphql } from "@/lib/react-query-graphql";
import { eventsKeys } from "./query-keys";
import { useQueryClient } from "@tanstack/react-query";

const UPDATE_EVENT_MUTATION = graphql(`
  #graphql
  mutation updateEvent($input: UpdateEventInput!) {
    updateEvent(input: $input) {
      message
      success
    }
  }
`);

const useUpdateEventMutation = () => {
  const queryClient = useQueryClient();
  return useGraphQLMutationProtected(
    {
      onSuccess: async (
        undefined,
        [
          {
            input: { eventId },
          },
        ],
      ) => {
        await queryClient.invalidateQueries({
          queryKey: eventsKeys.get(eventId),
        });
      },
    },
    UPDATE_EVENT_MUTATION,
  );
};

export default useUpdateEventMutation;
