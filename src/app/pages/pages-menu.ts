import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Upload',
    icon: 'cloud-upload',
    link: '/pages/upload',
  },
  {
    title: 'Arquivos',
    icon: 'folder',
    link: '/pages/view-files',
    home: true,
  },  
];
