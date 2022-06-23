import { Producto } from "./producto";

export class ProductoImpl implements Producto{
    catalogo!: string;
    // tipoProducto: string = '';
    descripcion: string = '';
    precio: number = 0;
    idProducto: string= '';
    urlProducto: string= '';
  
    constructor(){
    }
}
