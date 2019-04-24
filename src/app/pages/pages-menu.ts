import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Sécurité',
    icon: 'nb-locked',
    children: [
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
      {
        title: 'Change Email',
        link: '/auth/change-email',
      }
    ],
  },
];
