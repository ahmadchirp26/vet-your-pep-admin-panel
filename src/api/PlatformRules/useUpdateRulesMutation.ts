import { useGraphQLMutationProtected } from "@/lib/auth-helpers";
import { graphql } from "@/lib/react-query-graphql";

const UPDATE_RULES_MUTATION = graphql(`
  #graphql
  mutation UpdatePlatFormRule($input: UpdatePlatFormRulesInput!) {
    updatePlatFormRule(input: $input) {
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

const useUpdateRulesMutation = () =>
  useGraphQLMutationProtected({}, UPDATE_RULES_MUTATION);

export default useUpdateRulesMutation;
