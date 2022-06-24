import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogoService } from 'src/app/service/catalogo.service';
import { CatalogoImpl } from '../models/catalogo-impl';

@Component({
  selector: 'app-catalogo-form',
  templateUrl: './catalogo-form.component.html',
  styleUrls: ['./catalogo-form.component.css']
})
export class CatalogoFormComponent implements OnInit {

  catalogo: CatalogoImpl = new CatalogoImpl();

  constructor(private catalogoService: CatalogoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.catalogoService.crearCatalogo(this.catalogo).subscribe();
    this.router.navigate(['/catalgos']);
  }

}
