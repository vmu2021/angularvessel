import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlimentacionImpl } from '../catalogos/models/alimentacion-impl';
import { MenajeImpl } from '../catalogos/models/menaje-impl';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}catalogos`;
  private urlEndPointAli: string = `${this.host}alimentaciones`;
  private urlEndPointMen: string = `${this.host}menajes`;


  constructor(
    private http: HttpClient,
    ) { }


  getProductosAlmacenados(id:string): Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint}/${id}/electrodomesticos`).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  mapearAlimentacion(alimentoApi: any): AlimentacionImpl {

    let alimentoNuevo: AlimentacionImpl = new AlimentacionImpl();

    // alimentoNuevo.catalogo=alimentoApi._links.catalogo.href;
    alimentoNuevo.descripcion= alimentoApi.marca;
    alimentoNuevo.precio= alimentoApi.precio;
    alimentoNuevo.refrigerable= alimentoApi.refrigerable;
    // alimentoNuevo.urlProducto=alimentoApi._links.self.href;
    alimentoNuevo.idProducto=this.getId(alimentoApi._links.alimentacion.href);
    return alimentoNuevo;
  }

  extraerAlimentacion(respuestaApi: any): AlimentacionImpl[]{
    const lavadoras: (AlimentacionImpl[]) = [];
    let respuesta: any = respuestaApi._embedded.lavadoras;
    if(respuesta === undefined) {
      console.info('No existen alimentos en este catalogo');
    }
    else {respuestaApi._embedded.lavadoras.forEach((p: any) => {
      lavadoras.push(this.mapearAlimentacion(p));
    });}
    return lavadoras;
  }

   //post
   addAlimentacion(lavadora: AlimentacionImpl): Observable <any>{
    return this.http.post(this.urlEndPointAli, lavadora).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  //delete
  deleteLavadora(id: string): Observable <any>{
    return this.http.delete(`${this.urlEndPointAli}/${id}`).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }
//patch
  updateLavadora(lavadora: AlimentacionImpl){
    return this.http.patch<any>(`${this.urlEndPointAli}/${lavadora.idProducto}`, lavadora).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  //get

  getLavadora(id:string): Observable<any>{
    return this.http.get<any>(`${this.urlEndPointAli}/${id}`).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }



  mapearMenaje(menajeApi: any): MenajeImpl {

    let menajeNuevo = new MenajeImpl();

    menajeNuevo.descripcion= menajeApi.calificacionEnergetica;
    menajeNuevo.precio= menajeApi.precio;
    menajeNuevo.reciclable= menajeApi.reciclable;
    menajeNuevo.idProducto=this.getId(menajeApi._links.televisor.href);
    return menajeNuevo;

  }

  extraerMenaje(respuestaApi: any): MenajeImpl[] {
    const televisores: MenajeImpl[] = [];
    let respuesta: any= respuestaApi._embedded.televisores;
    if(respuesta===undefined){
      console.info('No existe menaje en este catalogo');
    }
    else{
    respuestaApi._embedded.televisores.forEach((p: any) => {
      televisores.push(this.mapearMenaje(p));
    });}
    return televisores;
  }

   //post menaje
   addMenaje(menaje: MenajeImpl): Observable <any>{
    return this.http.post(this.urlEndPointMen, menaje).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  //delete menaje
  deleteMenaje(id: string): Observable <any>{
    return this.http.delete(`${this.urlEndPointMen}/${id}`).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }
//patch menaje
  updateTelevisor(menaje: MenajeImpl){
    return this.http.patch<any>(`${this.urlEndPointMen}/${menaje.idProducto}`, menaje).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  getMenaje(id:string): Observable<any>{
    return this.http.get<any>(`${this.urlEndPointMen}/${id}`).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }



  // getProductosPagina(pagina: number): Observable<any> {
  //   return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  // }

  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }
}
