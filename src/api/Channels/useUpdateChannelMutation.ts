import { useGraphQLMutationProtected } from "@/lib/auth-helpers";
import { graphql } from "@/lib/react-query-graphql";
import { channelKeys } from "./query-keys";
import { useQueryClient } from "@tanstack/react-query";

const UPDATE_CHANNEL_MUTATION = graphql(`
  #graphql
  mutation updateChannel($input: UpdateChannelInput!) {
    updateChannel(input: $input) {
      message
      success
    }
  }
`);

const useUpdateChannelMutation = () => {
  const queryClient = useQueryClient();
  return useGraphQLMutationProtected(
    {
      onSuccess: async (
        undefined,
        [
          {
            input: { id },
          },
        ],
      ) => {
        await queryClient.invalidateQueries({
          queryKey: channelKeys.get(id),
        });
      }
    },
    UPDATE_CHANNEL_MUTATION,
  );
};

export default useUpdateChannelMutation;
