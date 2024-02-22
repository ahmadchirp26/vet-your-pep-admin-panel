import { routes } from "@/config/routes";
import PageHeader from "@/app/shared/page-header";
import EditRules from "@/app/shared/rules/edit-rules";

const pageHeader = {
  title: "Edit Rules",
  breadcrumb: [
    {
      name: "Dashboard",
    },
    {
      href: routes.rules.list,
      name: "Rules List",
    },
    {
      name: "Edit",
    },
  ],
};

export default function EditRulesPage({ params }: { params: { id: string } }) {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <EditRules id={params.id} />
    </>
  );
}
