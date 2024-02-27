import { routes } from "@/config/routes";
import PageHeader from "@/app/shared/page-header";
import EditChannel from "@/app/shared/channels/edit-channel";
import { getSessionServerAction } from "@/lib/Authentication/server-actions/getSessionServerAction";
import { redirect } from "next/navigation";
import EditEvent from "@/app/shared/events/edit-event";

const pageHeader = {
  title: "Edit Event",
  breadcrumb: [
    {
      name: "Dashboard",
    },
    {
      href: routes.events.list,
      name: "Event List",
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
      <EditEvent accessToken={data.accessToken} id={params.id} />
    </>
  );
}
