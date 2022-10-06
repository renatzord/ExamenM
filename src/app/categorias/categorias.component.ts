import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private PreferenicaSV: PreferenciasService,
    private router:Router
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
      Response=>this.router.navigate([""])
    
    )
  }

  CrearPreferencia(){

    this.PreferenicaSV.create(this.preferencia).subscribe( 
      Response=>this.router.navigate([""])
    )
  }

}
