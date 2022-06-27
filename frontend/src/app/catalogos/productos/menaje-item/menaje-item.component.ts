import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faEraser, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { MenajeImpl } from 'src/app/catalogos/models/menaje-impl';
import { Catalogo } from '../../models/catalogo';

@Component({
  selector: 'app-menaje-item',
  templateUrl: './menaje-item.component.html',
  styleUrls: ['./menaje-item.component.css']
})
export class MenajeItemComponent implements OnInit {

  catalogos: Catalogo[] = [];
  todosCatalogos: Catalogo[] = [];
  numPaginas: number = 0;

  @Input() menaje: MenajeImpl = new MenajeImpl();
  @Output() menajeEliminar = new EventEmitter<MenajeImpl>();
  @Output() menajeEditar= new EventEmitter<MenajeImpl>();

  constructor(private router:Router) { }

  ngOnInit(): void {
    }


//delete
borrarMenaje(): void {
  if (confirm(`¿Está seguro de que desea eliminar este producto?`)){
  this.menajeEliminar.emit(this.menaje);
}
}

//patch
modificarMenaje(): void {
  this.menajeEditar.emit(this.menaje);
}

pencil = faPencil;
trash = faTrashCan;
eraser=faEraser;


}
