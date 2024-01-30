'use client'
import PageHeader from '@/app/shared/page-header'
import UsersTable from '@/app/shared/users/user-list/table'
import useGetCustomers from '@/api/Customers/useGetCustomers'

const pageHeader = {
  title: 'Users',
  breadcrumb: [
    {
      name: 'Users List'
    }
  ]
}

export default function UsersPage() {
  const { data, status, error, currentPage, setCurrentPage } = useGetCustomers()

  if (status === 'pending') {
    return <p>Pending...</p>
  }
  if (error) {
    return <p>Error loading data</p>
  }
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <UsersTable
        data={data.getCustomersAdmin.results}
        page={currentPage}
        setPage={page => {
          setCurrentPage(page)
        }}
        pageSize={data.getCustomersAdmin.limit ?? 0}
        totalRows={data.getCustomersAdmin.totalRows ?? 0}
      />
    </>
  )
}
