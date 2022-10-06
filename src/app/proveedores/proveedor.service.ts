import { Injectable } from '@angular/core';
import { PROVEEDORES } from './proveedor.json';
import { Proveedor } from './proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor() { }

  obtenerProveedores(): Proveedor[]{
    return PROVEEDORES;
  }
}
