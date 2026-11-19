// Describe como es un producto del menú
export interface ProductoMenu {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagen: string;
  disponible: boolean;
}