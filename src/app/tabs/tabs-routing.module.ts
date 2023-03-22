import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosPage } from '../favoritos/favoritos.page';
import { HomePage } from '../home/home.page';
import { PerfilPage } from '../perfil/perfil.page';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        component: HomePage,

        // loadChildren: () => import('../home/home.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'favoritos',
        component: FavoritosPage,

        // loadChildren: () => import('../favoritos/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'perfil',
        component: PerfilPage,

        // loadChildren: () => import('../perfil/perfil.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
