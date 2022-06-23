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
@NgModule({
  declarations: [
    AppComponent,
    ProductosConsultaComponent,
    AlimentacionConsultaFormComponent,
    AlimentacionConsultaComponent,
    MenajeConsultaFormComponent,
    MenajeConsultaComponent
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
