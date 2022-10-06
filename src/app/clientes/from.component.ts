import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  
})
export class FromComponent implements OnInit {

  public cliente:Cliente = new Cliente()
  public titulo:string="Crear Cliente"
  constructor(private clienteService:ClienteService, private router:Router) { }

  ngOnInit(): void {
  }
public create():void{
 // console.log("Ha Realizado Un Click")
  //console.log(this.cliente)

  this.clienteService.create(this.cliente).subscribe(
    Response => this.router.navigate(['/clientes'])
  )
}
}
