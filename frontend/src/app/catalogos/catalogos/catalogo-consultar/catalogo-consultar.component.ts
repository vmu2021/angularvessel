import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Catalogo } from '../../models/catalogo';
import { CatalogoImpl } from '../../models/catalogo-impl';
import { CatalogoService } from '../../service/catalogo.service';


@Component({
  selector: 'app-catalogo-consultar',
  templateUrl: './catalogo-consultar.component.html',
  styleUrls: ['./catalogo-consultar.component.css']
})
export class CatalogoConsultarComponent implements OnInit {

  catalogo: Catalogo = new CatalogoImpl();

  constructor(private catalogoService: CatalogoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarCatalogo();
    this.catalogoService.getCatalogo(id).subscribe(response =>
       this.catalogo=this.catalogoService.mapearCatalogo(response));
  }

  cargarCatalogo(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
