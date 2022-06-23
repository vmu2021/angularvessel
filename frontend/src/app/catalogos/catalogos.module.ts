import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos-routing.module';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { ProductosComponent } from './productos/productos.component';
import { ModelsComponent } from './models/models.component';
import { CatalogoConsultarComponent } from './catalogo-consultar/catalogo-consultar.component';
import { CatalogoFormComponent } from './catalogo-form/catalogo-form.component';
import { CatalogoModificarComponent } from './catalogo-modificar/catalogo-modificar.component';
import { AlimentacionConsultarComponent } from './productos-consulta/alimentacion-consultar/alimentacion-consultar.component';


@NgModule({
  declarations: [
    CatalogosComponent,
    ProductosComponent,
    ModelsComponent,
    CatalogoConsultarComponent,
    CatalogoFormComponent,
    CatalogoModificarComponent,
    AlimentacionConsultarComponent
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule
  ]
})
export class CatalogosModule { }
