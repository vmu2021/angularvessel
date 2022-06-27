import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEye, faPencil } from '@fortawesome/free-solid-svg-icons';
import { AlimentacionImpl } from 'src/app/catalogos/models/alimentacion-impl';
import { Catalogo } from 'src/app/catalogos/models/catalogo';
import { MenajeImpl } from 'src/app/catalogos/models/menaje-impl';

import { environment } from 'src/environments/environment';
import { CatalogoService } from '../../service/catalogo.service';
import { ProductoService } from '../../service/producto.service';


@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  datos;
  datos1;
  datos2;
  opcionSeleccionada: string = '0'
  verSeleccion: string = '';
  alimentacion: AlimentacionImpl = new AlimentacionImpl();
  menaje: MenajeImpl = new MenajeImpl();
  catalogos:Catalogo[]=[];
  formulario:number = 0;

  private host:string = environment.host;
  private urlEndpoint:string = `${this.host}catalogos`


  constructor(
      private catalogoService: CatalogoService,
      private productoService: ProductoService,
      private router: Router,
      private activatedRoute: ActivatedRoute) { this.datos=['Alimentación', 'Menaje'];
      this.datos1=['refrigerado', 'NO refrigerado']
    this.datos2=['reciclado', 'NO reciclado']}

  ngOnInit(): void {
    let id: string = this.cargarCatalogo();
    this.alimentacion.catalogo=`${this.urlEndpoint}/${id}`;
    this.menaje.catalogo=`${this.urlEndpoint}/${id}`;
  }

  cargarCatalogo(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onAddAlimentacion(): void {
    this.productoService.addAlimentaciones(this.alimentacion).subscribe();
    let id: string = this.cargarCatalogo();
    this.router.navigate([`/catalogos/editar/${id}`]);
  }

  onAddMenaje(): void {
    this.productoService.addMenaje(this.menaje).subscribe();
    let id: string = this.cargarCatalogo();
    this.router.navigate([`/catalogos/editar/${id}`]);
  }

  capturar() {
    this.verSeleccion = this.opcionSeleccionada;
}

  pencil=faPencil;
  eye=faEye;

}
