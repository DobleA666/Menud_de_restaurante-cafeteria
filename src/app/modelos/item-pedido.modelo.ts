// Importa la interfaz del producto para reutilizarla
import { ProductoMenu } from './producto-menu.modelo';

// Describe una linea del pedido
export interface ItemPedido {
  producto: ProductoMenu;
  cantidad: number;
}