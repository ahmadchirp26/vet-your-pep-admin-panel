import { graphql } from "@/lib/react-query-graphql";
import {
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { useState } from "react";
import { customerKeys } from "./query-keys";


const GET_CUSTOMERS_ADMIN_QUERY = graphql(`
  query GetCustomersAdmin($input: ListCustomersInputs!) {
    getCustomersAdmin(input: $input) {
      totalRows
      offset
      limit
      results {
        cellPhone
        email
        firstName
        password
        id
        isActive
        lastName
        role
        stripeCustomerId
      }
    }
  }
`);


interface Props {
  limit: number;
}
const useGetCustomers = (props: Props | undefined = { limit: 5 }) => {
  const [pageParams, setPageParams] = useState({
    limit: props.limit,
    offset: 0,
  });

  // Getting Graphql request handler with Auth headers
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();

  const response = useQuery({
    // Following two lines are for pagination
    placeholderData: keepPreviousData,
    queryKey: customerKeys.list(pageParams),
    queryFn: ({ queryKey }) => {
      return protectedRequestHandler(GET_CUSTOMERS_ADMIN_QUERY, {
        // Following params are important for pagination
        input: { limit: queryKey[2].limit, offset: queryKey[2].offset },
      });
    },
  });

  return {
    ...response,
    // Following two lines are for pagination
    currentPage: pageParams.offset / pageParams.limit + 1,
    setCurrentPage: (page: number) => {
      const lastPage = response.data;
      if (response.isPlaceholderData || !lastPage) {
        return;
      }
      const latestLimit = props.limit;
      const latestTotalRows = lastPage.getCustomersAdmin.totalRows ?? 0;
      const maxPages = Math.max(
        latestLimit ? Math.ceil(latestTotalRows / latestLimit) : 0,
        1,
      );
      const newPage = Math.min(Math.max(page, 1), maxPages);
      const newOffset = (newPage - 1) * latestLimit;
      setPageParams({
        limit: latestLimit,
        offset: newOffset,
      });
    },
  };
};

export default useGetCustomers;
export type APIGetCustomersData = ReturnType<typeof useGetCustomers>['data'];
