import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlimentacionImpl } from '../models/alimentacion-impl';
import { MenajeImpl } from '../models/menaje-impl';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}catalogos`;
  private urlEndPointAli: string = `${this.host}alimentos`;
  private urlEndPointMen: string = `${this.host}menajes`;

  constructor(private http: HttpClient) {}

  getProductosCatalogados(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${id}/productos`).pipe(
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

  mapearAlimentaciones(alimentoApi: any): AlimentacionImpl {
    let alimentoNuevo: AlimentacionImpl = new AlimentacionImpl();

    alimentoNuevo.catalogo=alimentoApi._links.catalogo.href;
    alimentoNuevo.descripcion = alimentoApi.descripcion;
    alimentoNuevo.precio = alimentoApi.precio;
    alimentoNuevo.refrigerable = alimentoApi.refrigerable;
    alimentoNuevo.urlProducto=alimentoApi._links.self.href;
    alimentoNuevo.idProducto = this.getId(
      alimentoApi._links.self.href
    );
    return alimentoNuevo;
  }

  extraerAlimentaciones(respuestaApi: any): AlimentacionImpl[] {
    const alimentaciones: AlimentacionImpl[] = [];
    let respuesta: any = respuestaApi._embedded.alimentos;
    if (respuesta === undefined) {
      console.info('No existen alimentos en este catalogo');
    } else {
      respuestaApi._embedded.alimentos.forEach((p: any) => {
        alimentaciones.push(this.mapearAlimentaciones(p));
      });
    }
    return alimentaciones;
  }

  //post
  addAlimentaciones(alimento: AlimentacionImpl): Observable<any> {
    return this.http.post(this.urlEndPointAli, alimento).pipe(
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
  deleteAlimentaciones(id: string): Observable<any> {
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
  updateAlimentaciones(alimento: AlimentacionImpl) {
    return this.http
      .patch<any>(`${this.urlEndPointAli}/${alimento.idProducto}`, alimento)
      .pipe(
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

  getAlimentaciones(id: string): Observable<any> {
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

  mapearMenajes(menajeApi: any): MenajeImpl {
    let menajeNuevo = new MenajeImpl();

    menajeNuevo.descripcion = menajeApi.descripcion;
    menajeNuevo.precio = menajeApi.precio;
    menajeNuevo.reciclable = menajeApi.reciclable;
    menajeNuevo.urlProducto=menajeApi._links.self.href;
    menajeNuevo.idProducto = this.getId(menajeApi.urlProducto);
    return menajeNuevo;
  }

  extraerMenajes(respuestaApi: any): MenajeImpl[] {
    const menajes: MenajeImpl[] = [];
    let respuesta: any = respuestaApi._embedded.menajes;
    if (respuesta === undefined) {
      console.info('No existe menaje en este catalogo');
    } else {
      respuestaApi._embedded.menajes.forEach((p: any) => {
        menajes.push(this.mapearMenajes(p));
      });
    }
    return menajes;
  }

  //post menaje
  addMenaje(menaje: MenajeImpl): Observable<any> {
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
  deleteMenaje(id: string): Observable<any> {
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
  updateMenaje(menaje: MenajeImpl) {
    return this.http
      .patch<any>(`${this.urlEndPointMen}/${menaje.idProducto}`, menaje)
      .pipe(
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

  getMenaje(id: string): Observable<any> {
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

  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }
}
