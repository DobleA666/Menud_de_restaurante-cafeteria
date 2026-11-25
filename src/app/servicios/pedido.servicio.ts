import { Injectable, computed, signal } from '@angular/core';
import { ItemPedido } from '../modelos/item-pedido.modelo';
import { ProductoMenu } from '../modelos/producto-menu.modelo';

@Injectable({
    providedIn: 'root',
})
export class PedidoServicio {
    private readonly itemsInternos = signal<ItemPedido[]>([]);
    readonly items = this.itemsInternos.asReadonly();
    readonly cantidadTotal = computed(() => this.itemsInternos().reduce((suma, item) => suma + item.cantidad, 0), );
    readonly totalPagar = computed(() => this.itemsInternos().reduce((suma, item) => suma + item.producto.precio * item.cantidad, 0 ),);
    agregarProducto(producto: ProductoMenu): void {
        this.itemsInternos.update((items) => {
            const existente = items.find((item) => item.producto.id === producto.id);
            if (existente) {
                return items.map((item) => item. producto.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item,);
            }
            return [...items, { producto, cantidad: 1 }];
        });
    }
    aumentarCantidad(idProducto: number): void {
    this.itemsInternos.update((items) => items.map((item) => item.producto.id === idProducto ? { ...item, cantidad: item.cantidad + 1 } : item,),);
    }
    disminuirCantidad(idProducto: number): void {
    this.itemsInternos.update((items) =>
        items
        .map((item) => item.producto.id === idProducto ? { ...item, cantidad: item.cantidad - 1 } : item,)
        .filter((item) => item.cantidad > 0),
    );
    }
    vaciarPedido(): void {
    this.itemsInternos.set([]);
    }
}
