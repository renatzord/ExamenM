import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Preferencias} from './preferencias'

@Injectable({
  providedIn: 'root'
})
export class PreferenciasService {
  private urlPreferencias:string='http://localhost:8080/api/listarautor';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  
  

  create(cliente:Preferencias): Observable<Preferencias>{
    return this.http.post<Preferencias>(this.urlPreferencias, cliente, {headers: this.httpHeaders})
  }
}
