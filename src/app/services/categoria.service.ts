import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseApi } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlApi: string = environment.endpoint + "Categoria/";

  constructor(private http: HttpClient) { }

  lista(): Observable<ResponseApi> {
    var response = this.http.get<ResponseApi>(`${this.urlApi}Lista`);
    return response;
  }
}
