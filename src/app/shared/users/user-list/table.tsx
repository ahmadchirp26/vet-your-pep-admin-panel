'use client'
import { useMemo } from 'react'
import { useColumn } from '@/hooks/use-column'
import ControlledTable from '@/components/controlled-table'
import { getColumns } from './columns'
import { ListCustomersResponse } from '@/__generated__/graphql'

type Props = {
  data: ListCustomersResponse['results']
  totalRows: number
  pageSize: number
  page: number
  setPage: (pageNumber: number) => void
}

export default function UsersTable({ data, totalRows, page, setPage, pageSize }: Props) {
  
  const columns = useMemo(
    () =>
      getColumns({
        sortConfig: {
          direction: 'asc',
          key: 'firstName'
        },
        onHeaderCellClick: () => {}
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const { visibleColumns, checkedColumns, setCheckedColumns } = useColumn(columns)

  return (
    <ControlledTable
      className='overflow-hidden rounded-md border border-gray-200 text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0'
      variant='modern'
      showLoadingText={true}
      data={data}
      //@ts-ignore
      columns={visibleColumns}
      paginatorOptions={{
        pageSize,
        total: totalRows,
        current: page,
        onChange: setPage
      }}
      // filterOptions={{
      //   searchTerm,
      //   onSearchClear: () => {
      //     handleSearch('')
      //   },
      //   onSearchChange: event => {
      //     handleSearch(event.target.value)
      //   },
      //   hasSearched: isFiltered,
      //   hideIndex: 1,
      //   columns,
      //   checkedColumns,
      //   setCheckedColumns,
      //   enableDrawerFilter: true
      // }}
      // filterElement={
      //   <FilterElement
      //     isFiltered={isFiltered}
      //     filters={filters}
      //     updateFilter={updateFilter}
      //     handleReset={handleReset}
      //   />
      // }
    />
  )
}
