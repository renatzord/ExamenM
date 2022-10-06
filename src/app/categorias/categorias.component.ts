import { Component, OnInit } from '@angular/core';
import { Preferencias } from '../preferencias/preferencias';
import { PreferenciasService } from '../preferencias/preferencias.service';
import { Categorias } from './categorias';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  opcionSeleccionado: string  = '0';
  Categoria : Categorias[]= []
  idC?:number;
  public categoria : Categorias= new Categorias()
  public preferencia: Preferencias = new Preferencias()

  constructor(
    private ListarC : CategoriasService,
    private PreferenicaSV: PreferenciasService
  ) { }

  ngOnInit(): void {
    this.ListarC.obtenerCategorias().subscribe(
      Catego=>this.Categoria = Catego
    );
  }

  seleccionT(e : any){
    console.log(e.target.value);
     this.idC = e.target.value;
 
  }

  CrearCategoria(){
    this.ListarC.create(this.categoria).subscribe(
    
    )
  }

  CrearPreferencia(){
    this.PreferenicaSV.create(this.preferencia).subscribe()
  }

}
