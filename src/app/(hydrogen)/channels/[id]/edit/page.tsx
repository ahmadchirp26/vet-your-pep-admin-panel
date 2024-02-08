import { routes } from "@/config/routes";
import PageHeader from "@/app/shared/page-header";
import EditChannel from "@/app/shared/channels/edit-channel";

const pageHeader = {
  title: "Edit Channel",
  breadcrumb: [
    {
      name: "Dashboard",
    },
    {
      href: routes.channels.list,
      name: "Channel List",
    },
    {
      name: "Edit",
    },
  ],
};

export default function EditChannelPage({params}: { params:{id: string} }) {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <EditChannel id={params.id} />
    </>
  );
}
