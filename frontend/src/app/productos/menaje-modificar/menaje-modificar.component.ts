import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCirclePlus, faPencilAlt, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Catalogo } from 'src/app/catalogos/models/catalogo';
import { MenajeImpl } from 'src/app/catalogos/models/menaje-impl';
import { CatalogoService } from 'src/app/service/catalogo.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-menaje-modificar',
  templateUrl: './menaje-modificar.component.html',
  styleUrls: ['./menaje-modificar.component.css']
})
export class MenajeModificarComponent implements OnInit {

  // datos1;
  datos;
  opcionSeleccionada: string = '0'
  verSeleccion: string = '';

  menaje: MenajeImpl = new MenajeImpl();
  catalogos: Catalogo[] = [];

  constructor(private productoService: ProductoService,
              private catalogoService: CatalogoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {this.datos=['reciclable', 'NO reciclable']}

            // this.datos1=[17, 22, 29, 32, 43, 49, 55, 65, 75, 80, 100]  }

  ngOnInit(): void {
    let id: string = this.cargarMenaje();
    this.productoService.getMenaje(id).subscribe(res =>
      this.menaje = this.productoService.mapearMenajes(res));
    this.catalogoService.getCatalogos().subscribe((response) =>
      this.catalogos = this.catalogoService.extraerCatalogos(response));
  }

  cargarMenaje(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onEditarMenaje(): void {
    this.productoService.updateMenaje(this.menaje).subscribe();
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionada;
}


  pencil=faPencilAlt;
  plus=faCirclePlus;
  cambio=faPenNib;

}
