import type { Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'menu',
        loadComponent: () => import('../paginas/menu/menu.page').then((m) => m.MenuPage),
      },
      {
        path: 'pedido',
        loadComponent: () => import('../paginas/pedido/pedido.page').then((m) => m.PedidoPage),
      },
      {
        path: 'sucursales',
        loadComponent: () => import('../paginas/sucursales/sucursales.page').then((m) => m.SucursalesPage),
      },
      {
        path: '',
        redirectTo: '/tabs/menu',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/menu',
    pathMatch: 'full',
  },
];
