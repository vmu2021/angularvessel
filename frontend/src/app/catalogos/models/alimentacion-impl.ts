import { ProductoImpl } from "./producto-impl";

export class AlimentacionImpl extends ProductoImpl{

    refrigerable: boolean = false;
    constructor(){
        super();
      }
    
    // esReciclable(refrigerable: boolean){
    //   let esRefrigerado;
    //   if (refrigerable==true) {
    //     esRefrigerado="refrigerado";
    //   } else{
    //     esRefrigerado="no refrigerado"
    //   }
    //   return esRefrigerado;
    // }

}
