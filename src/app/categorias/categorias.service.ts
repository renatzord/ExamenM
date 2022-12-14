import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Categorias} from './categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  
  private urlendpoint:string='http://localhost:8080/api/crearCategorias';
  private urlendpoint1:string='http://localhost:8080/api/listarCategorias';
 

  constructor(private http:HttpClient) { }  
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'})
  obtenerCategorias(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(this.urlendpoint1);
  }

  create(cliente:Categorias): Observable<Categorias>{
    return this.http.post<Categorias>(this.urlendpoint, cliente, {headers: this.httpHeaders})
  }

}
