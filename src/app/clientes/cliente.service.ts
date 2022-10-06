import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private urlEndpoint:string='http://localhost:8080/api/clientes';
private urlEndpoint1:string='http://localhost:8080/api/crear';

private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'})

constructor(private http:HttpClient) { }
   

  obtenerClientes(): Observable< Cliente[]>{
   // return of (CLIENTES);
   return this.http.get<Cliente[]>(this.urlEndpoint);

  }

  create(cliente:Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndpoint1, cliente, {headers: this.httpHeaders})
  }
}
