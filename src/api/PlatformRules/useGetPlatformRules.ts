import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { graphql } from "@/lib/react-query-graphql";
import { useQuery } from "@tanstack/react-query";
import { rulesKeys } from "./query-keys";

const GET_RULES_BY_ID = graphql(`
  query GetPlatFormRulesById($input: String!) {
    getPlatFormRulesById(input: $input) {
      createdBy
      createdDate
      id
      rules
      title
      updatedBy
      updatedDate
    }
  }
`);

const useGetRulesById = ({ id }: { id: string }) => {
  const queryProtectedHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: rulesKeys.get(id),
    queryFn: ({ queryKey }) => {
      console.log(queryKey);
      return queryProtectedHandler(GET_RULES_BY_ID, {
        input: queryKey[1],
      });
    },
  });
};

export default useGetRulesById;
