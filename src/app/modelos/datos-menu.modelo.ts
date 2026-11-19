// Importa las interfaces que forman el JSON
import { ProductoMenu } from './producto-menu.modelo';
import { Sucursal } from './sucursal.modelo';

// Describe la forma completa del archivo menu.json
export interface DatosMenu {
    //Lista de categorias, productos y sucursales que forman el menu
  categorias: string[];
  productos: ProductoMenu[];
  sucursales: Sucursal[];
}