"use client";
import { useMemo } from "react";
import { useColumn } from "@/hooks/use-column";
import ControlledTable from "@/components/controlled-table";
import { getColumns } from "./columns";
import { type APIGetChannelsData } from "@/api/Channels";

type Props = {
  data: NonNullable<APIGetChannelsData>['getAllChannelsWithPagination']['results'];
  remoteSearch: {
    searchTerm: string;
    onSearchChange: (value?: string) => void;
  };
  remotePagination: {
    totalRows: number;
    pageSize: number;
    page: number;
    setPage: (pageNumber: number) => void;
    setPageSize: (pageSize: number) => void;
  };
};

export default function ChannelsTable({
  data,
  remotePagination: { totalRows, pageSize, page, setPage, setPageSize },
  remoteSearch,
}: Props) {
  const columns = useMemo(
    () => getColumns(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const { visibleColumns, checkedColumns, setCheckedColumns } =
    useColumn(columns);

  return (
    <ControlledTable
      className="overflow-hidden rounded-md border border-gray-200 text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"
      variant="modern"
      showLoadingText={true}
      data={data}
      columns={visibleColumns}
      paginatorOptions={{
        pageSize,
        total: totalRows,
        current: page,
        onChange: setPage,
        setPageSize: setPageSize,
      }}
      filterOptions={{
        searchTerm: remoteSearch.searchTerm,
        onSearchClear: () => remoteSearch.onSearchChange(undefined),
        onSearchChange: (event) =>
          remoteSearch.onSearchChange(event.target.value),
        hideIndex: 1,
        columns,
        checkedColumns,
        setCheckedColumns,
        enableDrawerFilter: true,
      }}
    />
  );
}
