'use client'

import { Badge } from '@/components/ui/badge';
import { HeaderCell } from '@/components/ui/table'
import { Text } from '@/components/ui/text'

// get status badge
function getStatusBadge(status: boolean) {
  switch (status) {
    case true:
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{'Active'}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{'Not Active'}</Text>
        </div>
      );
  }
}

type Columns = {
  // data: any[];
  sortConfig?: any;
  // handleSelectAll: any;
  // checkedItems: string[];
  // onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  // onChecked?: (id: string) => void;
};
export const getColumns = ({
onHeaderCellClick,
sortConfig
}:Columns) => [
  {
    title: <HeaderCell title='User Id' />,
    dataIndex: 'id',
    key: 'id',
    width: 150,
    render: (id: string) => <Text className='text-sm'>{id}</Text>
  },
  {
    title: <HeaderCell title='Email' />,
    dataIndex: 'email',
    key: 'email',
    width: 150,
    render: (email: string) => <Text className='text-sm'>{email}</Text>
  },
  {
    title: (
      <HeaderCell
        title='First Name'
        sortable
        ascending={sortConfig?.direction === 'asc' && sortConfig?.key === 'firstName'}
      />
    ),
    onHeaderCell: () => onHeaderCellClick('firstName'),
    dataIndex: 'firstName',
    key: 'firstName',
    width: 150,
    render: (firstName: string) => <Text className='text-sm'>{firstName}</Text>
  },
  {
    title: (
      <HeaderCell
        title='Last Name'
        sortable
        ascending={sortConfig?.direction === 'asc' && sortConfig?.key === 'lastName'}
      />
    ),
    onHeaderCell: () => onHeaderCellClick('lastName'),

    dataIndex: 'lastName',
    key: 'lastName',
    width: 150,
    render: (lastName: string) => <Text className='text-sm'>{lastName}</Text>
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: 'isActive',
    key: 'isActive',
    width: 120,
    render: (value: boolean) => getStatusBadge(value),
  },
  {
    title: <HeaderCell title="Role" />,
    dataIndex: 'role',
    key: 'role',
    width: 120,
    render: (role: string) => <Text className='text-sm'>{role}</Text>
  },
]
