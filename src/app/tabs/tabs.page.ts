import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { restaurant, cart, location } from 'ionicons/icons';
import { PedidoServicio } from '../servicios/pedido.servicio';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge],
})
export class TabsPage {

  constructor(public pedidoServicio: PedidoServicio) {
    addIcons({ restaurant, cart, location });
  }
}
