import { Component, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon, IonBadge, IonFooter, IonAlert, } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, remove, cartOutline } from 'ionicons/icons';
import { PedidoServicio } from '../../servicios/pedido.servicio';
import { formatearPrecio } from '../../utilidades/formato.util';

@Component({
  selector: 'app-pedido',
  templateUrl: 'pedido.page.html',
  styleUrls: ['pedido.page.scss'],
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon, IonBadge, IonFooter, IonAlert, ],
})
export class PedidoPage {
  mostrarConfirmacion = signal<boolean>(false);
  mostrarExito = signal<boolean>(false);
  botonesConfirmacion = [ { text: 'Cancelar', role: 'cancel' },
    {
      text: 'Confirmar',
      role: 'confirm',
      handler: () => {
        this.pedidoServicio.vaciarPedido();
        this.mostrarExito.set(true);
      },
    },
  ];
  botonesExito = ['Aceptar'];
  constructor(public pedidoServicio: PedidoServicio) {
    addIcons({ add, remove, cartOutline });
  }
  textoConfirmacion(): string {
    return 'Total a pagar: ' + formatearPrecio(this.pedidoServicio.totalPagar());
  }
  formatearPrecio(precio: number): string {
    return formatearPrecio(precio);
  }
}