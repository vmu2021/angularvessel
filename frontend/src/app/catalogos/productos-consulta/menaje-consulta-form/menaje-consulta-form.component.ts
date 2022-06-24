import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenajeImpl } from 'src/app/catalogos/models/menaje-impl';
import { ProductoService } from '../../service/producto.service';


@Component({
  selector: 'app-menaje-consulta-form',
  templateUrl: './menaje-consulta-form.component.html',
  styleUrls: ['./menaje-consulta-form.component.css']
})
export class MenajeConsultaFormComponent implements OnInit {

  menaje: MenajeImpl = new MenajeImpl();

  constructor(private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarMenaje();
    this.productoService.getMenaje(id).subscribe(response =>
      this.menaje = this.productoService.mapearMenajes(response));
  }

  cargarMenaje(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
