import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoService } from 'src/app/service/catalogo.service';
import { Catalogo } from '../models/catalogo';
import { CatalogoImpl } from '../models/catalogo-impl';

@Component({
  selector: 'app-catalogo-modificar',
  templateUrl: './catalogo-modificar.component.html',
  styleUrls: ['./catalogo-modificar.component.css']
})
export class CatalogoModificarComponent implements OnInit {

  catalogo: Catalogo= new CatalogoImpl();

    todosCatalogos: Catalogo[]= [];

  constructor(
    private catalogoService: CatalogoService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    let id: string = this.cargarCatalogo();
    this.catalogoService.getCatalogo(id).subscribe((response) =>{
      this.catalogo = this.catalogoService.mapearCatalogo(response);
    })
  }

cargarCatalogo(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

onEditarCatalogo(): void{
    this.catalogoService.updateCatalogo(this.catalogo).subscribe();
    this.router.navigate(['catalogos']);
  }

onProductoCrear(catalogo: Catalogo){
  this.verDatos(catalogo);
  let url = `catalogos/editar/${catalogo.idCatalogo}/formularioProducto`;
  this.router.navigate([url]);
}

verDatos(catalogo: Catalogo): void {
  this.catalogo = catalogo;
}
  // getTodosCatalogos(): void {
  //   this.catalogoService.getCatalogos().subscribe(r =>{
  //           this.todosCatalogos.push(...this.catalogoService.extraerCatalogos(r));
  //         });
  // }

  // modificarCatalogos(idCatalogos: string, catalogo: CatalogosImpl): void{
  //   this.catalogoService.patchCatalogo(idCatalogo,catalogo).subscribe();
  // }

}
