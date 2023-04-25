import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  items = [ {
  "id": 1,
  "name": "Varejo 360",
  "img": "./assets/imagens/1.png",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Sebrae - Recife"
},
{
  "id": 2,
  "name": "A Cor Purpura",
  "img": "./assets/imagens/2.png",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Teatro do Parque - Recife"

},
{
 "id": 3,
 "name": "A Arte do Estoicismo",
 "img": "./assets/imagens/3.jpg",
 "data": " Qui, 09 Mar - 19:00",
 "local": "Online"

},
{
  "id": 4,
  "name": "Terra por elas Convida",
  "img": "./assets/imagens/4.jpg",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Sebrae - Recife"

},
{
  "id": 5,
  "name": "Match Hall",
  "img": "./assets/imagens/5.png",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Sebrae - Recife"

}
]

programacao = [
{
"dia": "Quinta-feira"
},
{
"dia": "Sexta-feira"
},
{
"dia": "Sábado de Carnaval"
},
{
"dia": "Domingo de Carnaval"
},
{
"dia": "Segunda de Carnaval"
},
{
"dia": "Terça feira Gorda"
},
{
"dia": "Quarta-feira de Cinzas"
}
]

opts ={
slidesPerView: 2.4,
slidesOffsetBefore: 20,
spaceBetween: 10,
freeMode: true
}

presentingElement: any = null;

showPesquisa: boolean = false;

public results = [...this.items];



  constructor(private router: Router){

  }

  ngOnInit() {
    // this.presentingElement = document.querySelector('.ion-modal');
  }


  irModallistEventos(){
    this.router.navigate(['tabs/listaEventos']);
  }

  irModalDetalhes(id: any){
    this.router.navigate(['tabs/detalhes/' + id]);
  }

  handleInput(event: any) {
   this.showPesquisa = true;
   if(event.target.value === ""){this.showPesquisa = false;}
  }





}
