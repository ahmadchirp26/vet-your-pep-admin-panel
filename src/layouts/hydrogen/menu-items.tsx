import { routes } from '@/config/routes';
import { type ReactNode } from 'react';
import {
  PiUserCircleDuotone,
  PiUsersDuotone
} from 'react-icons/pi';

// Note: do not add href in the label object, it is rendering as label
export const menuItems: Array<{
  name:string,
  href:string,
  icon:ReactNode,
  dropdownItems?:Array<{
    name:string,
    href:string,
  }>
}> = [
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
