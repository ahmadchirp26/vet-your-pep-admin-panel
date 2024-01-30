"use client";
import PageHeader from "@/app/shared/page-header";
import UsersTable from "@/app/shared/users/user-list/table";
import useGetCustomers from "@/api/Customers/useGetCustomers";

const pageHeader = {
  title: "Users",
  breadcrumb: [
    {
      name: "Dashboard",
    },
    {
      name: "User List",
    },
  ],
};

export default function UsersPage() {
  const { data, status, error, pageParams, filters } = useGetCustomers();

  if (status === "pending") {
    return <p>Pending...</p>;
  }
  if (error) {
    return <p>Error loading data</p>;
  }
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <UsersTable
        data={data.getCustomersAdmin.results}
        remotePagination={pageParams}
        remoteSearch={{
          searchTerm: filters.searchQuery ?? "",
          onSearchChange: (q) =>
            filters.setSearchQuery(Boolean(q) ? q : undefined),
        }}
      />
    </>
  );
}
