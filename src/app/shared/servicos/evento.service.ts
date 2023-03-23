import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  url: string = 'http://localhost:3000/'


  constructor(private http: HttpClient) { }

  buscarEventosPorCidade(cidade: string) {
    return this.http.get(this.url +'evento?cidade=' + cidade)
 }
}
