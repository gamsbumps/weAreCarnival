import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from './../../servicos/evento.service';


@Component({
  selector: 'app-detalhes-modal',
  templateUrl: './detalhes-modal.component.html',
  styleUrls: ['./detalhes-modal.component.scss'],
})
export class DetalhesModalComponent  implements OnInit {

  id: any;
  objeto: any;

 constructor( private route: ActivatedRoute, private eventoService: EventoService) { }

  ngOnInit() {
  this.id = this.route.snapshot.params["id"];
  this.buscarEventosPorId();
  }

  buscarEventosPorId() {
   this.eventoService.buscarEventoPorId(this.id).subscribe( data =>{
    this.objeto = (data as any[0]);
    console.log(this.objeto);
   })
  }

}
