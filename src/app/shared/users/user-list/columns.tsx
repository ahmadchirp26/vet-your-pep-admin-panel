"use client";
import { HeaderCell } from "@/components/ui/table";
import { Text } from "@/components/ui/text";


export const getColumns = () => [
  {
    title: <HeaderCell title="User Id" />,
    dataIndex: "id",
    key: "id",
    width: 150,
    render: (id: string) => <Text className="text-sm">{id}</Text>,
  },
  {
    title: <HeaderCell title="Email" />,
    dataIndex: "email",
    key: "email",
    width: 150,
    render: (email: string) => <Text className="text-sm">{email}</Text>,
  },
  {
    title: <HeaderCell title="First Name" />,
    dataIndex: "firstName",
    key: "firstName",
    width: 150,
    render: (firstName: string) => <Text className="text-sm">{firstName}</Text>,
  },
  {
    title: <HeaderCell title="Last Name" />,
    dataIndex: "lastName",
    key: "lastName",
    width: 150,
    render: (lastName: string) => <Text className="text-sm">{lastName}</Text>,
  },

];
