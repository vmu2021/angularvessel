import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlimentacionImpl } from 'src/app/catalogos/models/alimentacion-impl';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-alimentacion-consulta-form',
  templateUrl: './alimentacion-consulta-form.component.html',
  styleUrls: ['./alimentacion-consulta-form.component.css']
})
export class AlimentacionConsultaFormComponent implements OnInit {

  alimentacion: AlimentacionImpl = new AlimentacionImpl();

  constructor(private productoService: ProductoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarAlimentacion();
    this.productoService.getAlimentaciones(id).subscribe(response =>
      this.alimentacion = this.productoService.mapearAlimentaciones(response));
  }


  cargarAlimentacion(): string {
    return this.activatedRoute.snapshot.params['id'];
  }


}
