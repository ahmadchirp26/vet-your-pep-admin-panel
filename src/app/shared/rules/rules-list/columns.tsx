"use client";
import PencilIcon from "@/components/icons/pencil";
import { ActionIcon } from "@/components/ui/action-icon";
import { HeaderCell } from "@/components/ui/table";
import { Text } from "@/components/ui/text";
import { Tooltip } from "@/components/ui/tooltip";
import Link from "next/link";
import DeletePopover from "../../delete-popover";

import { routes } from "@/config/routes";

interface Props {
  onDeleteItem: (id: string) => void;
}

export const getColumns = ({ onDeleteItem }: Props) => [
  {
    title: <HeaderCell title="Rules Id" />,
    dataIndex: "id",
    key: "id",
    width: 150,
    render: (id: string) => <Text className="text-sm">{id}</Text>,
  },
  {
    title: <HeaderCell title="Rule Title" />,
    dataIndex: "title",
    key: "title",
    width: 150,
    render: (title: string) => <Text className="text-sm">{title}</Text>,
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
          content={() => "Edit Rule"}
          placement="top"
          color="invert"
        >
          <Link href={routes.rules.edit(row.id)}>
            <ActionIcon
              tag="span"
              size="sm"
              variant="outline"
              aria-label={"Edit Rule"}
              className="hover:text-gray-700"
            >
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <DeletePopover
          title={`Delete the channel`}
          description={`Are you sure you want to delete this ${row.title} rule?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];
