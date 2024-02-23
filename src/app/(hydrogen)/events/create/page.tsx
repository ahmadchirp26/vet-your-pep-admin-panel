import { routes } from "@/config/routes";
import PageHeader from "@/app/shared/page-header";
import CreateChannel from "@/app/shared/channels/create-channel";
import { getSessionServerAction } from "@/lib/Authentication/server-actions/getSessionServerAction";
import { redirect } from "next/navigation";
import CreateEvent from "@/app/shared/events/create-event";

const pageHeader = {
  title: "Create Event",
  breadcrumb: [
    {
      name: "Dashboard",
    },
    {
      href: routes.events.list,
      name: "Events List",
    },
    {
      name: "Create",
    },
  ],
};

export default async function CreateEventPage() {
  const data = await getSessionServerAction();
  if (!data) {
    return redirect("/login");
  }
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <CreateEvent accessToken={data.accessToken} />
    </>
  );
}
