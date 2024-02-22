"use client";
import { useMemo } from "react";
import { useColumn } from "@/hooks/use-column";
import ControlledTable from "@/components/controlled-table";
import { getColumns } from "./columns";
import { type ListPlatFormRulesResponse } from "@/__generated__/graphql";

type Props = {
  data: ListPlatFormRulesResponse["results"];
};

export default function RulesTable({
  data, //   remotePagination: { totalRows, pageSize, page, setPage, setPageSize },
} //   remoteSearch,
: Props) {
  const columns = useMemo(
    () =>
      getColumns({
        onDeleteItem: (id) => {
          console.log("Delete item", id);
        },
      }),
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
    />
  );
}
