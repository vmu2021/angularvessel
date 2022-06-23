import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ProductosConsultaComponent } from './productos-consulta/productos-consulta.component';
import { AlimentacionConsultaFormComponent } from './productos-consulta/alimentacion-consulta-form/alimentacion-consulta-form.component';
import { AlimentacionConsultaComponent } from './productos-consulta/alimentacion-consulta/alimentacion-consulta.component';
import { MenajeConsultaFormComponent } from './productos-consulta/menaje-consulta-form/menaje-consulta-form.component';
import { MenajeConsultaComponent } from './productos-consulta/menaje-consulta/menaje-consulta.component';
import { AlimentacionItemComponent } from './productos/alimentacion-item/alimentacion-item.component';
import { AlimentacionModificarComponent } from './productos/alimentacion-modificar/alimentacion-modificar.component';
import { MenajeItemComponent } from './productos/menaje-item/menaje-item.component';
import { MenajeModificarComponent } from './productos/menaje-modificar/menaje-modificar.component';
import { ProductosFormComponent } from './productos/productos-form/productos-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductosConsultaComponent,
    AlimentacionConsultaFormComponent,
    AlimentacionConsultaComponent,
    MenajeConsultaFormComponent,
    MenajeConsultaComponent,
    AlimentacionItemComponent,
    AlimentacionModificarComponent,
    MenajeItemComponent,
    MenajeModificarComponent,
    ProductosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
