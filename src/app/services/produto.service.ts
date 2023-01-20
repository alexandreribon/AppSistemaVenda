import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseApi } from '../interfaces/response-api';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private urlApi: string = environment.endpoint + "Produto/";

  constructor(private http: HttpClient) { }

  lista(): Observable<ResponseApi> {
    var response = this.http.get<ResponseApi>(`${this.urlApi}Lista`);
    return response;
  }

  registrar(request: Produto): Observable<ResponseApi> {
    var response = this.http.post<ResponseApi>(`${this.urlApi}Registrar`, request);
    return response;
  }

  editar(request: Produto): Observable<ResponseApi> {
    var response = this.http.put<ResponseApi>(`${this.urlApi}Editar`, request);
    return response;
  }

  remover(id: number): Observable<ResponseApi> {
    var response = this.http.delete<ResponseApi>(`${this.urlApi}Excluir/${id}`);
    return response;
  }
}
