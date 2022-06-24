import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { AlimentacionImpl } from '../models/alimentacion-impl';
import { MenajeImpl } from '../models/menaje-impl';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  alimentaciones: AlimentacionImpl[] = [];
  menajes: MenajeImpl[] = [];
  alimentacionVerDatos: AlimentacionImpl = new AlimentacionImpl();
  menajeVerDatos: MenajeImpl = new MenajeImpl();

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private productoService: ProductoService) { }

  ngOnInit(): void {
    let id: string = this.activatedRoute.snapshot.params['id'];
  this.productoService.getProductosCatalogados(id).subscribe((res) =>
  this.alimentaciones= this.productoService.extraerAlimentaciones(res));
  this.productoService.getProductosCatalogados(id).subscribe((res) =>
  this.menajes = this.productoService.extraerMenajes(res));
  }

  onAlimentacionEliminar(alimentacion: AlimentacionImpl){
    this.productoService.deleteAlimentaciones(alimentacion.idProducto).subscribe();
  }

  onAlimentacionEditar(alimentacion: AlimentacionImpl){
    this.alimentacionVerDatos = alimentacion;
    let url = `catalogos/alimentaciones/editar/${alimentacion.idProducto}`;
    this.router.navigate([url])
  }

  onMenajeEliminar(menaje: MenajeImpl){
    this.productoService.deleteMenaje(menaje.idProducto).subscribe();
  }

  onMenajeEditar(menaje: MenajeImpl){
    this.menajeVerDatos = menaje;
    let url = `catalogos/menajes/editar/${menaje.idProducto}`;
    this.router.navigate([url])
  }

}
