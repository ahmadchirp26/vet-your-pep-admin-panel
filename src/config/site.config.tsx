/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import logoImg from '@public/logo.svg';
import logoIconImg from '@public/logo-short.svg';

enum MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

export const siteConfig = {
  title: 'Vet Your Pep',
  description: 'VET YOUR PEP',
  logo: logoImg,
  icon: logoIconImg,
  mode: MODE.LIGHT,
  // TODO: favicon
};
