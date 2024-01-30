interface PaginationProps {
  limit: number;
  offset: number;
}
interface ListsFilter {
  q?: string;
}
export const customerKeys = {
  all: ["todos"] as const,
  list: (filters: PaginationProps & ListsFilter) => [...customerKeys.all, 'lists', filters] as const,
};
