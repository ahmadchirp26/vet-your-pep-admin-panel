import { graphql } from "@/lib/react-query-graphql";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { useQuery } from "@tanstack/react-query";
// import { env } from "@/env";
import { env } from "@/env.mjs";
import { eventsKeys } from "./query-keys";

const GET_EVENTS_BY_ID = graphql(`
  query GetEventById($input: String!) {
    getEventById(input: $input) {
      createdBy
      createdDate
      startDate
      id
      images
      channel {
        id
        title
      }
      text
      title
      updatedBy
      updatedDate
    }
  }
`);

export const useGetEventById = ({ id }: { id: string }) => {
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: eventsKeys.get(id),
    queryFn: () => {
      return protectedRequestHandler(GET_EVENTS_BY_ID, {
        input: id,
      });
    },
    select: (data) => {
      return {
        ...data,
        getEventById: {
          ...data.getEventById,
          images: data.getEventById.images?.map(
            (image) => `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${image}`,
          ),
        },
      };
    },
  });
};
