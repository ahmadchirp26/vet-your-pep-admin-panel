import { routes } from "@/config/routes";
import PageHeader from "@/app/shared/page-header";
import CreateChannel from "@/app/shared/channels/create-channel";
import { getSessionServerAction } from "@/lib/Authentication/server-actions/getSessionServerAction";
import { redirect } from "next/navigation";

const pageHeader = {
  title: "Create Channel",
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

export default async function CreateChannelPage() {
  const data = await getSessionServerAction();
  if (!data) {
    return redirect("/login");
  }
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <CreateChannel  accessToken={data.accessToken} />
    </>
  );
}
