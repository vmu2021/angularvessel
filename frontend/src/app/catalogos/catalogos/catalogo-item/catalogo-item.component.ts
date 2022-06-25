import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencilAlt, faBook, faTrashCan, faEraser, faAdd, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Catalogo } from '../../models/catalogo';
import { CatalogoImpl } from '../../models/catalogo-impl';

@Component({
  selector: 'app-catalogo-item',
  templateUrl: './catalogo-item.component.html',
  styleUrls: ['./catalogo-item.component.css']
})
export class CatalogoItemComponent implements OnInit {

  @Output()
  catalogoResultado = new EventEmitter<Catalogo>();
  catalogos: Catalogo[] = [];
  todosCatalogos: Catalogo[] = [];
  numPaginas: number = 0;

  @Input()
  catalogo: Catalogo = new CatalogoImpl ();
  @Output()
  catalogoConsultar = new EventEmitter<CatalogoImpl>();
  @Output()
  catalogoEditar = new EventEmitter<Catalogo>();
  @Output()
  catalogoEliminar = new EventEmitter<CatalogoImpl>();

  constructor() { }

  ngOnInit(): void {
  }


  eliminar(): void {
    if (confirm('¿Está seguro? Se borrará el catalogo y todo su contenido')){
      this.catalogoEliminar.emit(this.catalogo);
    }
  }


  consultar():void{
    this.catalogoConsultar.emit(this.catalogo);

  }

  editar(): void{
    this.catalogoEditar.emit(this.catalogo);
  }


  pencil=faPencilAlt;
  lupa= faBook;
  trash=faTrashCan;
  eraser= faEraser;
  plus=faAdd;
  consulta=faMagnifyingGlass;



}
