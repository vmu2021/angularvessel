import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCirclePlus, faPencilAlt, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { AlimentacionImpl } from 'src/app/catalogos/models/alimentacion-impl';
import { Catalogo } from 'src/app/catalogos/models/catalogo';
import { CatalogoService } from 'src/app/service/catalogo.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-alimentacion-modificar',
  templateUrl: './alimentacion-modificar.component.html',
  styleUrls: ['./alimentacion-modificar.component.css']
})
export class AlimentacionModificarComponent implements OnInit {

  datos;
  opcionSeleccionada: string = '0'
  verSeleccion: string = '';

  alimento: AlimentacionImpl= new AlimentacionImpl();
  catalogos: Catalogo[]=[];


  constructor(
    private catalogoService: CatalogoService,
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
  ) {this.datos=['refrigerado', 'NO refrigerado']; }

  ngOnInit(): void {
    let id: string = this.cargarAlimentacion();
    this.productoService.getAlimentaciones(id).subscribe(response=>
      this.alimento = this.productoService.mapearAlimentaciones(response));
      this.catalogoService.getCatalogos().subscribe((r)=>
      this.catalogos=this.catalogoService.extraerCatalogos(r));
  }

  cargarAlimentacion(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onModificarAlimentacion(): void {
    this.productoService.updateAlimentaciones(this.alimento).subscribe();
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionada;
}

  pencil=faPencilAlt;
  plus=faCirclePlus;
  cambio=faPenNib;

}
