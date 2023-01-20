import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from '../interfaces/login';
import { ResponseApi } from '../interfaces/response-api';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlApi: string = environment.endpoint + "Usuario/";

  constructor(private http: HttpClient) { }

  iniciarSessao(request: Login): Observable<ResponseApi> {
    var response = this.http.post<ResponseApi>(`${this.urlApi}IniciarSessao`, request);
    return response;
  }

  lista(): Observable<ResponseApi> {
    var response = this.http.get<ResponseApi>(`${this.urlApi}Lista`);
    return response;
  }

  registrar(request: Usuario): Observable<ResponseApi> {
    var response = this.http.post<ResponseApi>(`${this.urlApi}Registrar`, request);
    return response;
  }

  editar(request: Usuario): Observable<ResponseApi> {
    var response = this.http.put<ResponseApi>(`${this.urlApi}Editar`, request);
    return response;
  }

  remover(id: number): Observable<ResponseApi> {
    var response = this.http.delete<ResponseApi>(`${this.urlApi}Excluir/${id}`);
    return response;
  }
}
