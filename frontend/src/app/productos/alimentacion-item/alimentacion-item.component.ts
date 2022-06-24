import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEraser, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AlimentacionImpl } from '../../catalogos/models/alimentacion-impl';
import { Catalogo } from '../../catalogos/models/catalogo';

@Component({
  selector: 'app-alimentacion-item',
  templateUrl: './alimentacion-item.component.html',
  styleUrls: ['./alimentacion-item.component.css']
})
export class AlimentacionItemComponent implements OnInit {
  catalogoas: Catalogo[] = [];
  todosCatalogos: Catalogo[] = [];
  numPaginas: number = 0;

  @Input() alimentacion: AlimentacionImpl = new AlimentacionImpl();
  @Output() alimentacionEliminar = new EventEmitter<AlimentacionImpl>();
  @Output() alimentacionEditar= new EventEmitter<AlimentacionImpl>();

  constructor() { }

  ngOnInit(): void {
    }


//delete
borrarAlimentacion(): void {
  if (confirm(`¿Está seguro de que desea eliminar este producto?`)){
  this.alimentacionEliminar.emit(this.alimentacion);
}
}

//patch
modifiarAlimentacion(): void {
  this.alimentacionEditar.emit(this.alimentacion);
}

pencil = faPencil;
trash = faTrashCan;
eraser=faEraser;

}
