interface PaginationProps {
    limit: number;
    offset: number;
  }
  interface ListsFilter {
    q?: string;
  }
  export const eventsKeys = {
    all: ["events"] as const,
    list: (filters: PaginationProps & ListsFilter) =>
      [...eventsKeys.all, "lists", filters] as const,
    search: (query: { q?: string }) =>
      [...eventsKeys.all, "search", query] as const,
    get: (id: string) => [...eventsKeys.all, id] as const,
  };
  