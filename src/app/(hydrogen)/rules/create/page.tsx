import { routes } from "@/config/routes";
import PageHeader from "@/app/shared/page-header";

import CreateRules from "@/app/shared/rules/create-rules";

const pageHeader = {
  title: "Create Platform Rules",
  breadcrumb: [
    {
      name: "Dashboard",
    },
    {
      href: routes.rules.list,
      name: "Platform Rules",
    },
    {
      name: "Create",
    },
  ],
};

export default function CreateRulesPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <CreateRules />
    </>
  );
}
