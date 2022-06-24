import { Catalogo } from "./catalogo";

export class CatalogoImpl implements Catalogo{
  idCatalogo!: string;
  descripcion!: string;
  tipo!: string;
  urlCatalogo!: string;

  constructor() {}
}
