import { routes } from "@/config/routes";
import PageHeader from "@/app/shared/page-header";
import EditChannel from "@/app/shared/channels/edit-channel";
import { getSessionServerAction } from "@/lib/Authentication/server-actions/getSessionServerAction";
import { redirect } from "next/navigation";

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

export default async function EditChannelPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getSessionServerAction();
  if (!data) {
    return redirect("/login");
  }
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <EditChannel accessToken={data.accessToken} id={params.id} />
    </>
  );
}
