import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-modal',
  templateUrl: './lista-modal.component.html',
  styleUrls: ['./lista-modal.component.scss'],
})
export class ListaModalComponent  implements OnInit {

  items = [ { "name": "Varejo 360",
  "img": "./assets/imagens/1.png",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Sebrae - Recife"
},
{ "name": "A Cor Purpura",
  "img": "./assets/imagens/2.png",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Teatro do Parque - Recife"
},
{ "name": "A Arte do Estoicismo",
 "img": "./assets/imagens/3.jpg",
 "data": " Qui, 09 Mar - 19:00",
 "local": "Online"
},
{  "name": "Terra por elas Convida",
  "img": "./assets/imagens/4.jpg",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Sebrae - Recife"
},
{ "name": "Match Hall",
  "img": "./assets/imagens/5.png",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Sebrae - Recife"
}
]

  constructor() { }

  ngOnInit() {}

}
