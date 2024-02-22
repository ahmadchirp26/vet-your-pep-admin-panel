interface PaginationProps {
  limit: number;
  offset: number;
}
interface ListsFilter {
  q?: string;
}
export const rulesKeys = {
  all: ["rules"] as const,
  list: (filters: PaginationProps & ListsFilter) =>
    [...rulesKeys.all, "lists", filters] as const,
  search: (query: { q?: string }) =>
    [...rulesKeys.all, "search", query] as const,
  get: (id: string) => [...rulesKeys.all, id] as const,
};
