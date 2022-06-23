import { ProductoImpl } from "./producto-impl";

export class MenajeImpl extends ProductoImpl{
    reciclable: boolean = false;
    constructor(){
        super();
    }
}
