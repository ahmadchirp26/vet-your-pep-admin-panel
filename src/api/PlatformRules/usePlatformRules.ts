"use client";

import { graphql } from "@/lib/react-query-graphql";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { rulesKeys } from "./query-keys";

const GET_PLATFORM_RULES_QUERY = graphql(`
  query GetPlatFormRules($input: ListPlatFormRulesInput!) {
    getPlatFormRules(input: $input) {
      limit
      offset
      totalRows
      results {
        createdBy
        createdDate
        id
        rules
        title
        updatedBy
        updatedDate
      }
    }
  }
`);

interface Props {
  limit: number;
}
const usePlatformRules = (props: Props | undefined = { limit: 5 }) => {
  const [paginationParams, setPaginationParams] = useState({
    limit: props.limit,
    offset: 0,
  });
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);

  // Getting Graphql request handler with Auth headers
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();

  const response = useQuery({
    // Following two lines are for pagination
    placeholderData: keepPreviousData,
    queryKey: rulesKeys.list({ ...paginationParams, q: searchQuery }),
    queryFn: ({ queryKey }) => {
      return protectedRequestHandler(GET_PLATFORM_RULES_QUERY, {
        // Following params are important for pagination
        input: {
          limit: queryKey[2].limit,
          offset: queryKey[2].offset,
          filter: {
            search: queryKey[2].q,
          },
        },
      });
    },
  });

  const paginationParamsExtended = {
    ...paginationParams,
    totalRows: response.data?.getPlatFormRules.totalRows ?? 0,
  };

  return {
    ...response,
    // Following is conversion to pages format from API response of offset and limit, and back.
    pageParams: {
      page:
        paginationParamsExtended.offset / paginationParamsExtended.limit + 1,
      pageSize: paginationParamsExtended.limit,
      totalRows: paginationParamsExtended.totalRows,
      setPage: (page: number) => {
        const lastPage = response.data;
        if (response.isPlaceholderData || !lastPage) {
          return;
        }

        const maxPages = Math.max(
          paginationParamsExtended.limit
            ? Math.ceil(
                paginationParamsExtended.totalRows /
                  paginationParamsExtended.limit,
              )
            : 0,
          1,
        );
        const newPage = Math.min(Math.max(page, 1), maxPages);
        const newOffset = (newPage - 1) * paginationParamsExtended.limit;
        setPaginationParams({
          limit: paginationParamsExtended.limit,
          offset: newOffset,
        });
      },
      setPageSize: (pageSize: number) => {
        const lastPage = response.data;
        if (response.isPlaceholderData || !lastPage) {
          return;
        }
        const latestTotalRows = paginationParamsExtended.totalRows;
        const maxPages = Math.max(
          pageSize ? Math.ceil(latestTotalRows / pageSize) : 0,
          1,
        );
        // Possible page change due to pageSize change
        const newPage = Math.min(
          Math.max(paginationParams.offset / pageSize + 1, 1),
          maxPages,
        );
        const newOffset = (newPage - 1) * pageSize;
        setPaginationParams({
          limit: pageSize,
          offset: newOffset,
        });
      },
    },
    filters: {
      searchQuery,
      setSearchQuery: (q?: string) => {
        setSearchQuery(q);
        setPaginationParams({
          limit: paginationParamsExtended.limit,
          offset: 0,
        });
      },
    },
  };
};

export default usePlatformRules;
export type APIGetPlatformRules = ReturnType<typeof usePlatformRules>["data"];

// const rulesQuery = ["platformRules"];

// export const usePlatformRules = () => {
//   const protectedRequestHandler = useGraphQLRequestHandlerProtected();

//   return useQuery({
//     queryKey: rulesQuery,
//     queryFn: () => {
//       return protectedRequestHandler(GET_PLATFORM_RULES_QUERY, {
//         input: {
//           filter: {},
//           limit: 100,
//           offset: 0,
//         },
//       });
//     },
//   });
// };
