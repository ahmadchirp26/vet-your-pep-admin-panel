"use client";
import PageHeader from "@/app/shared/page-header";
import useGetChannels from "@/api/Channels/useGetChannels";
import ChannelsTable from "@/app/shared/channels/channel-list/table";

const pageHeader = {
  title: "Channels",
  breadcrumb: [
    {
      name: "Dashboard",
    },
    {
      name: "Channel List",
    },
  ],
};

export default function UsersPage() {
  const { data, status, error, pageParams, filters } = useGetChannels();

  if (status === "pending") {
    return <p>Pending...</p>;
  }
  if (error) {
    return <p>Error loading data</p>;
  }
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <ChannelsTable
        data={data.getAllChannelsWithPagination.results}
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
