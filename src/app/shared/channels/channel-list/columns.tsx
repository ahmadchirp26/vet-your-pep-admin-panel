"use client";
import { HeaderCell } from "@/components/ui/table";
import { Text } from "@/components/ui/text";
import { toCurrency } from "@/utils/to-currency";
import {
  type ColumnType,
} from "rc-table/lib/interface";
import { ActionIcon } from "@/components/ui/action-icon";
import PencilIcon from "@/components/icons/pencil";
import { Tooltip } from "@/components/ui/tooltip";
import DeletePopover from "../../delete-popover";
import Link from "next/link";
import { routes } from "@/config/routes";
import { type APIGetChannelsData } from "@/api/Channels";

type ChannelsData = NonNullable<APIGetChannelsData>["listChannels"]["results"];

interface Props {
  onDeleteItem: (id: string) => void;
}

export const getColumns = ({
  onDeleteItem,
}: Props): ColumnType<ChannelsData[number]>[] => [
  {
    title: <HeaderCell title="Channel Id" />,
    dataIndex: "id",
    key: "id",
    colSpan: 1,
    render: (id: string) => <Text className="text-sm">{id}</Text>,
  },
  {
    title: <HeaderCell title="title" />,
    dataIndex: "title",
    key: "title",
    colSpan: 1,
    render: (title: string) => <Text className="text-sm">{title}</Text>,
  },
  {
    title: <HeaderCell title="Visbility" />,
    dataIndex: "status",
    key: "status",
    colSpan: 1,
    render: (status: string) => <Text className="text-sm">{status}</Text>,
  },
  // {
  //   title: <HeaderCell title="Moderator" />,
  //   dataIndex: "moderator",
  //   key: "moderator",
  //   width: 150,
  //   render: (moderator:NonNullable<APIGetChannelsData>["listChannels"]["results"][number]['moderator']) => {
  //     const name = moderator.firstName + " " + moderator.lastName;
  //     const avatar = moderator.profileImage;
  //     return (
  //       <AvatarCard
  //         src={avatar ?? ''}
  //         name={name}
  //         avatarProps={{
  //           name,
  //           size: "sm",
  //         }}
  //       />
  //     );
  //   },
  // },
  {
    title: <HeaderCell title="Price" className="me-6 justify-end" />,
    dataIndex: "price",
    key: "price",
    colSpan: 1,
    align: "right",
    render: (price: string | number) => (
      <Text className="me-6 font-medium text-gray-700 dark:text-gray-600">
        {toCurrency(price)}
      </Text>
    ),
  },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: "action",
    key: "action",
    width: 130,
    render: (_: string, row) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        <Tooltip
          size="sm"
          content={() => "Edit Channel"}
          placement="top"
          color="invert"
        >
          <Link href={routes.channels.edit(row.id)}>
            <ActionIcon
              tag="span"
              size="sm"
              variant="outline"
              aria-label={"Edit Channel"}
              className="hover:text-gray-700"
            >
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <DeletePopover
          title={`Delete the channel`}
          description={`Are you sure you want to delete this ${row.title} channel?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];
