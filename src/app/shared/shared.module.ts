import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { CardExpansivoComponent } from './components/card-expansivo/card-expansivo.component';
import { EventoService } from './servicos/evento.service';



@NgModule({
  declarations: [CardExpansivoComponent],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ],
  exports: [CardExpansivoComponent],
  providers: [EventoService],

})
export class SharedModule { }
