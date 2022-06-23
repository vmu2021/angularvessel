import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos-routing.module';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { ProductosComponent } from './productos/productos.component';
import { ModelsComponent } from './models/models.component';


@NgModule({
  declarations: [
    CatalogosComponent,
    ProductosComponent,
    ModelsComponent
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule
  ]
})
export class CatalogosModule { }
