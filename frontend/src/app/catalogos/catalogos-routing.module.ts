import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoConsultarComponent } from './catalogos/catalogo-consultar/catalogo-consultar.component';
import { CatalogoFormComponent } from './catalogos/catalogo-form/catalogo-form.component';
import { CatalogoModificarComponent } from './catalogos/catalogo-modificar/catalogo-modificar.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { MenajeModificarComponent } from './productos/menaje-modificar/menaje-modificar.component';
import { ProductosFormComponent } from './productos/productos-form/productos-form.component';
import { AlimentacionConsultaFormComponent } from './productos-consulta/alimentacion-consulta-form/alimentacion-consulta-form.component';
import { MenajeConsultaFormComponent } from './productos-consulta/menaje-consulta-form/menaje-consulta-form.component';
import { AlimentacionModificarComponent } from './productos/alimentacion-modificar/alimentacion-modificar.component';

const routes: Routes = [{
  path: '',
  component: CatalogosComponent
},
{
  path: 'formulario-catalogo',
  component: CatalogoFormComponent
},
{
  path: 'editar/:id',
  component: CatalogoModificarComponent
},
{
  path: 'editar/:id/formularioProducto',
  component: ProductosFormComponent
},
{
  path: 'consultar/:id',
  component: CatalogoConsultarComponent
},
{
  path: 'alimentaciones/consultar/:id',
  component: AlimentacionConsultaFormComponent
},
{
  path: 'menajes/consultar/:id',
  component: MenajeConsultaFormComponent
},
{
  path: 'alimentaciones/editar/:id',
  component: AlimentacionModificarComponent
},
{
  path: 'menajes/editar/:id',
  component: MenajeModificarComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }
