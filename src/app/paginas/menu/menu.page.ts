import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class MenuPage {
  constructor() {}
}
