import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import {FooterComponent} from './footer/footer.component';

import { ClientesComponent } from './clientes/clientes.component'
import { ClienteService } from './clientes/cliente.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FromComponent } from './clientes/from.component';
import { FormsModule } from '@angular/forms';
import { CategoriasComponent } from './categorias/categorias.component';
import { PreferenciasComponent } from './preferencias/preferencias.component';

const rutas: Routes=[
  {path:'', redirectTo:"", pathMatch:'full'},

  {path: 'clientes', component: ClientesComponent},
  {path:'proveedores', component: ProveedoresComponent},
  {path:'clientes/from', component: FromComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path:'preferencias', component: PreferenciasComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    ClientesComponent,
    ProveedoresComponent,
    FromComponent,
    CategoriasComponent,
    PreferenciasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
