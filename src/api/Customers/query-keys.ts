interface PaginationProps {
  limit: number;
  offset: number;
}
interface ListsFilter {
  q?: string;
}
export const customerKeys = {
  all: ["customers"] as const,
  list: (filters: PaginationProps & ListsFilter) => [...customerKeys.all, 'lists', filters] as const,
  search:(query:{q?:string}) => [...customerKeys.all, 'search', query] as const
};
