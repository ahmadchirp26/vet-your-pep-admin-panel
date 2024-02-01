"use client";
import PageHeader from "@/app/shared/page-header";
import useGetChannels from "@/api/Channels/useGetChannels";
import ChannelsTable from "@/app/shared/channels/channel-list/table";
import { routes } from "@/config/routes";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { PiPlusBold } from 'react-icons/pi';

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
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.channels.create}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button
            tag="span"
            className="w-full @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
          >
            <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
            Add Channel
          </Button>
        </Link>
      </PageHeader>
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
