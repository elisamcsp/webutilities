import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any = [
    {
      title: 'TOOLS',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Encode text to Base64',
          url: '/encode',
        },
        {
          title: 'Decode Base64 to text',
          url: '/decode',
        },
        {
          title: 'Encode file to Base64',
          url: '/encodefile',
        },
      ],
    },
  ];

  constructor() {}
}
