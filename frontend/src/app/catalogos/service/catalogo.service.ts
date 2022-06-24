import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Catalogo } from '../models/catalogo';
import { CatalogoImpl } from '../models/catalogo-impl';


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}catalogos`;
  private urlEndPointTel: string = `${this.host}menajes`;

constructor(
    private http: HttpClient,
) { }

getId(url: string):string{
      let posicionFinal: number = url.lastIndexOf('/');
      let numId:string = url.slice(posicionFinal + 1, url.length);
      return numId;
    }


getCatalogos(): Observable<any> {
  return this.http.get<any>(this.urlEndPoint);
  }

mapearCatalogo(catalogoApi: any): CatalogoImpl {
  let catalogo: Catalogo = new CatalogoImpl();
  catalogo.idCatalogo= this.getId(catalogoApi._links.catalogo.href);
  catalogo.descripcion= catalogoApi.descripcion;
  // catalogo.urlCatalogo=catalogoApi._links.catalogo.href;
  return catalogo;
}

extraerCatalogos(respuestaApi: any): Catalogo[] {
  const catalogos: Catalogo[] = [];
  respuestaApi._embedded.catalogos.forEach((a: any) => {
  catalogos.push(this.mapearCatalogo(a));
  });
  return catalogos;
}

crearCatalogo(catalogo: Catalogo): Observable<any>{
  return this.http.post(`${this.urlEndPoint}`, catalogo).pipe(
    catchError((e) =>{
      if(e.status ===400) {
        return throwError(()=> new Error (e));
      }
      if(e.roor.mensaje){
        console.error(e.error.mensaje);
      }
      return throwError(()=> new Error(e));
    })
    );
}

deleteCatalogo(id: string): Observable<Catalogo> {
  return this.http
    .delete<Catalogo>(`${this.urlEndPoint}/${id}`).pipe(
    catchError((e) =>{
      if(e.status ===400) {
        return throwError(()=> new Error (e));
      }
      if(e.roor.mensaje){
        console.error(e.error.mensaje);
      }
        return throwError(()=> new Error(e));
      })
    );
}


updateCatalogo(catalogo:Catalogo): Observable<any>{
  return this.http.patch<any>(`${this.urlEndPoint}/${catalogo.idCatalogo}`, catalogo).pipe(
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

getCatalogo(id:string): Observable<any>{
  return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
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

getCatalogosBuscados(descripcion:string, tipo:string): Observable<any>{
  return this.http.get<any>(`${this.host}menajes/search/buscar-productos?marca=${descripcion}&tipo=${tipo}`).pipe(
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
extraerCatalogosMetodo(respuestaApi: any): Catalogo[] {
  const catalogos: Catalogo[] = [];
  respuestaApi._embedded.catalogos.forEach((a: any) => {
  catalogos.push(this.mapearCatalogo(a));
  });
  return catalogos;
}
}
