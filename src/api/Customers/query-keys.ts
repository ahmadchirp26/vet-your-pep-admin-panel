interface PaginationProps {
  limit: number;
  offset: number;
}

export const customerKeys = {
  all: ["todos"] as const,
  list: (filters: PaginationProps) => [...customerKeys.all, 'lists', filters] as const,
};
