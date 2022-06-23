import { ProductoImpl } from "./producto-impl";

export class AlimentacionImpl extends ProductoImpl{
    refrigerable: boolean = false;
    constructor(){
        super();
      }
}
