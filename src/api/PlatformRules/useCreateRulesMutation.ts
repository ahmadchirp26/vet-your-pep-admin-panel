import { useGraphQLMutationProtected } from "@/lib/auth-helpers";
import { graphql } from "@/lib/react-query-graphql";

const CREATE_RULES_MUTATION = graphql(`
  mutation CreatePlatFormRule($input: CreatePlatFormRulesInput!) {
    createPlatFormRule(input: $input) {
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

const useCreateRulesMutation = () => {
  return useGraphQLMutationProtected({}, CREATE_RULES_MUTATION);
};

export default useCreateRulesMutation;
