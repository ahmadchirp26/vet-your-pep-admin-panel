"use client";

import usePlatformRules from "@/api/PlatformRules/usePlatformRules";
import PageHeader from "@/app/shared/page-header";
import RulesTable from "@/app/shared/rules/rules-list/table";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";
import { PiPlusBold } from "react-icons/pi";

const pageHeader = {
  title: "Rules",
  breadcrumb: [
    {
      name: "Dashboard",
    },
    {
      name: "Platform Rules",
    },
  ],
};

export default function Rules() {
  //   const { data, status, error, pageParams, filters } = useGetCustomers();
  const { data, status, error, pageParams, filters } = usePlatformRules();
  console.log("Rules", data);

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
          href={routes.rules.create}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button
            tag="span"
            className="w-full @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
          >
            <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
            Add Rules
          </Button>
        </Link>
      </PageHeader>

      <RulesTable
        data={data?.getPlatFormRules?.results}
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
