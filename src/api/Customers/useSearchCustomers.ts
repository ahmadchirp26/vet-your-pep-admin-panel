import { graphql } from "@/lib/react-query-graphql";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { customerKeys } from "./query-keys";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const SEARCH_CUSTOMERS_QUERY = graphql(`
  query searchCustomers($input: String!) {
    searchCustomers(search: $input) {
      message
      results {
        id
        firstName
        lastName
        email
      }
      totalCount
    }
  }
`);

const useSearchCustomersQuery = () => {
  const [query, setQuery] = useState<string | undefined>(undefined);
  const graphQlRequestHandler = useGraphQLRequestHandlerProtected();
  const queryResults = useQuery({
    queryKey: customerKeys.search({ q: query }),
    queryFn: ({ queryKey }) =>
      graphQlRequestHandler(SEARCH_CUSTOMERS_QUERY, {
        input: queryKey[2].q ?? "",
      }),
  });

  return {
    query,
    setQuery,
    ...queryResults,
  };
};

export default useSearchCustomersQuery;
