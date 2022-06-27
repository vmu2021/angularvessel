import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlimentacionImpl } from '../models/alimentacion-impl';
import { MenajeImpl } from '../models/menaje-impl';

import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-productos-consulta',
  templateUrl: './productos-consulta.component.html',
  styleUrls: ['./productos-consulta.component.css']
})
export class ProductosConsultaComponent implements OnInit {

  alimentos: AlimentacionImpl[] = [];
  menajes: MenajeImpl[] = [];
  alimentoVerDatos: AlimentacionImpl = new AlimentacionImpl();
  menajeVerDatos: MenajeImpl = new MenajeImpl();

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private productoService: ProductoService) { }

  ngOnInit(): void {
    let id: string = this.activatedRoute.snapshot.params['id'];
  this.productoService.getProductosCatalogados(id).subscribe((res) =>
  this.alimentos= this.productoService.extraerAlimentaciones(res));
  this.productoService.getProductosCatalogados(id).subscribe((res) =>
  this.menajes = this.productoService.extraerMenajes(res));
  }

  // onAlimentacionEliminar(alimento: AlimentacionImpl){
  //   this.productoService.deleteAlimentaciones(alimento.idProducto).subscribe();
  // }

  // onAlimentacionEditar(alimento: AlimentacionImpl){
  //   this.alimentoVerDatos = alimento;
  //   let url = `catalogos/alimentaciones/editar/${alimento.idProducto}`;
  //   this.router.navigate([url])
  // }

  // onMenajeEliminar(menaje: MenajeImpl){
  //   this.productoService.deleteMenaje(menaje.idProducto).subscribe();
  // }

  // onMenajeEditar(menaje: MenajeImpl){
  //   this.menajeVerDatos = menaje;
  //   let url = `catalogos/menajes/editar/${menaje.idProducto}`;
  //   this.router.navigate([url])
  // }
  onAlimentacionConsultar(alimentacion: AlimentacionImpl){
    this.verDatosAlimentacion(alimentacion);
    let url = `catalogos/alimentaciones/consultar/${alimentacion.idProducto}`;
    this.router.navigate([url])
  }

  verDatosAlimentacion(alimentacion: AlimentacionImpl): void {
    this.alimentoVerDatos = alimentacion;
  }

  onMenajeConsultar(menaje: MenajeImpl){
    this.verDatosMenaje(menaje);
    let url = `catalogos/menajes/consultar/${menaje.idProducto}`;
    this.router.navigate([url])
  }

  verDatosMenaje(menaje: MenajeImpl): void {
    this.menajeVerDatos = menaje;
  }

}
