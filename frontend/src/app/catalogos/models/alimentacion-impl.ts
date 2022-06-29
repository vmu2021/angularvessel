import { ProductoImpl } from "./producto-impl";

export class AlimentacionImpl extends ProductoImpl{

    refrigerado: boolean = false;
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
