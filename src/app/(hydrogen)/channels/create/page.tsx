import { routes } from "@/config/routes";
import PageHeader from "@/app/shared/page-header";
import CreateChannel from "@/app/shared/channels/create-channel";

const pageHeader = {
  title: "Create Product",
  breadcrumb: [
    {
      name: "Dashboard",
    },
    {
      href: routes.channels.list,
      name: "Channel List",
    },
    {
      name: "Create",
    },
  ],
};

export default function CreateChannelPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <CreateChannel />
    </>
  );
}
