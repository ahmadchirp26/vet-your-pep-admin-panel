import { routes } from '@/config/routes';
import {
  PiUserCircleDuotone,
  PiUsersDuotone
} from 'react-icons/pi';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  {
    name:"Users",
    href: routes.users.list,
    icon: <PiUserCircleDuotone />,
  },
  {
    name:"Channels",
    href: routes.channels.list,
    icon: <PiUsersDuotone />,
  }
];
