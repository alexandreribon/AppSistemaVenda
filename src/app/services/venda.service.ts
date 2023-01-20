import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseApi } from '../interfaces/response-api';
import { Venda } from '../interfaces/venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private urlApi: string = environment.endpoint + "Venda/";

  constructor(private http: HttpClient) { }

  registrar(request: Venda): Observable<ResponseApi> {
    var response = this.http.post<ResponseApi>(`${this.urlApi}Registrar`, request);
    return response;
  }

  historico(buscarPor: string, numeroVenda: string, dataInicio: string, dataFim: string): Observable<ResponseApi> {
    var response = this.http.get<ResponseApi>(`${this.urlApi}Historico?buscarPor=${buscarPor}&numeroVenda=${numeroVenda}&dataInicio=${dataInicio}&dataFim=${dataFim}`);
    return response;
  }

  relatorio(dataInicio: string, dataFim: string): Observable<ResponseApi> {
    var response = this.http.get<ResponseApi>(`${this.urlApi}Relatorio?dataInicio=${dataInicio}&dataFim=${dataFim}`);
    return response;
  }
}
