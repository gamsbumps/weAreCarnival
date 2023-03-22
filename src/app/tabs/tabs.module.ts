import { FavoritosPage } from './../favoritos/favoritos.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { PerfilPage } from '../perfil/perfil.page';
import { HomePage } from '../home/home.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
    FavoritosPage,
    PerfilPage,
    HomePage
  ],
  exports: [
    FavoritosPage,
    PerfilPage,
    HomePage
  ]
})
export class TabsPageModule {}
