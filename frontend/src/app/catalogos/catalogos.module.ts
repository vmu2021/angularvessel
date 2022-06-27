import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos-routing.module';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { ProductosComponent } from './productos/productos.component';
import { CatalogoConsultarComponent } from './catalogos/catalogo-consultar/catalogo-consultar.component';
import { CatalogoFormComponent } from './catalogos/catalogo-form/catalogo-form.component';
import { CatalogoModificarComponent } from './catalogos/catalogo-modificar/catalogo-modificar.component';
import { AlimentacionItemComponent } from './productos/alimentacion-item/alimentacion-item.component';
import { AlimentacionModificarComponent } from './productos/alimentacion-modificar/alimentacion-modificar.component';
import { AlimentacionConsultaComponent } from './productos-consulta/alimentacion-consulta/alimentacion-consulta.component';
import { AlimentacionConsultaFormComponent } from './productos-consulta/alimentacion-consulta-form/alimentacion-consulta-form.component';
import { MenajeItemComponent } from './productos/menaje-item/menaje-item.component';
import { MenajeModificarComponent } from './productos/menaje-modificar/menaje-modificar.component';
import { MenajeConsultaComponent } from './productos-consulta/menaje-consulta/menaje-consulta.component';
import { MenajeConsultaFormComponent } from './productos-consulta/menaje-consulta-form/menaje-consulta-form.component';
import { ProductosConsultaComponent } from './productos-consulta/productos-consulta.component';
import { ProductosFormComponent } from './productos/productos-form/productos-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CatalogoItemComponent } from './catalogos/catalogo-item/catalogo-item.component';


@NgModule({
  declarations: [
    CatalogosComponent,
    CatalogoConsultarComponent,
    CatalogoFormComponent,
    CatalogoModificarComponent,
    ProductosComponent,
    AlimentacionItemComponent,
    AlimentacionModificarComponent,
    AlimentacionConsultaComponent,
    AlimentacionConsultaFormComponent,
    MenajeItemComponent,
    MenajeModificarComponent,
    MenajeConsultaComponent,
    MenajeConsultaFormComponent,
    ProductosConsultaComponent,
    ProductosFormComponent,
    CatalogoItemComponent

  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    FormsModule, FontAwesomeModule,ReactiveFormsModule

  ],

  providers:[],
  exports:[]
})
export class CatalogosModule { }
