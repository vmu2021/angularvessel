import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AlimentacionImpl } from 'src/app/catalogos/models/alimentacion-impl';

@Component({
  selector: 'app-alimentacion-consulta',
  templateUrl: './alimentacion-consulta.component.html',
  styleUrls: ['./alimentacion-consulta.component.css']
})
export class AlimentacionConsultaComponent implements OnInit {

  lupa = faMagnifyingGlass;
  pencil = faPencil;
  trashC = faTrashCan;

  @Input() alimentacion: AlimentacionImpl = new AlimentacionImpl();
  @Output() alimentacionConsultar = new EventEmitter<AlimentacionImpl>();

  constructor() { }

  ngOnInit(): void {
  }

  consultar(): void{
    this.alimentacionConsultar.emit(this.alimentacion);
  }

}
