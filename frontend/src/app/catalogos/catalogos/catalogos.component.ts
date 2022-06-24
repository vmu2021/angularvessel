import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CatalogoService } from 'src/app/service/catalogo.service';
import { Catalogo } from '../models/catalogo';
import { CatalogoImpl } from '../models/catalogo-impl';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {

  catalogos: Catalogo[] = [];
  catalogoVerDatos: Catalogo= new CatalogoImpl();



  constructor(
    private router: Router,
    private catalogoService: CatalogoService,
    ) { }

  ngOnInit(): void {
    this.catalogoService.getCatalogos().subscribe((response) =>
    this.catalogos = this.catalogoService.extraerCatalogos(response));
  }

  verDatos(catalogo: Catalogo): void {
    this.catalogoVerDatos = catalogo;
  }

  onCatalogoEliminar(catalogo: Catalogo) {
    console.log(`Ha eliminado el catalogo ${catalogo.descripcion}`);
    this.catalogoService.deleteCatalogo(catalogo.idCatalogo).subscribe();
    this.router.navigate(['catalogos']);
  }

  onCatalogoEditar(catalogo: Catalogo){
    this.verDatos(catalogo);
  let url = `catalogos/editar/${catalogo.idCatalogo}`;
  this.router.navigate([url])}

  onCatalogoConsultar(catalogo: Catalogo){
    this.verDatos(catalogo);
    let url = `catalogo/consultar/${catalogo.idCatalogo}`;
    this.router.navigate([url])
  }


  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;


}
