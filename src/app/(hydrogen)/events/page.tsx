"use client";

import PageHeader from "@/app/shared/page-header";
import EventsTable from "../../shared/events/events-list/table";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";
import { PiPlusBold } from "react-icons/pi";
import useGetEvents from "@/api/Events/useGetEvents";

const pageHeader = {
  title: "Events",
  breadcrumb: [
    {
      name: "Dashboard",
    },
    {
      name: "Channel Events",
    },
  ],
};

export default function Rules() {
  const { data, status, error, pageParams, filters } = useGetEvents();
  //   console.log("Rules", data);

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
          href={routes.events.create}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button
            tag="span"
            className="w-full @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
          >
            <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
            Add Event
          </Button>
        </Link>
      </PageHeader>

      <EventsTable
        data={data?.getEvents?.results}
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
