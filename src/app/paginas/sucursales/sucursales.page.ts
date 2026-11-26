import { Component, OnInit, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonIcon, IonSpinner, IonButton, } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { location, call, time, alertCircle } from 'ionicons/icons';
import { MenuServicio } from '../../servicios/menu.servicio';
import { Sucursal } from '../../modelos/sucursal.modelo';

@Component({
  selector: 'app-sucursales',
  templateUrl: 'sucursales.page.html',
  styleUrls: ['sucursales.page.scss'],
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonIcon, IonSpinner, IonButton, ],
})
export class SucursalesPage implements OnInit {
  sucursales = signal<Sucursal[]>([]);
  cargando = signal<boolean>(true);
  hayError = signal<boolean>(false);

  constructor(private menuServicio: MenuServicio) {
    addIcons({ location, call, time, alertCircle });
  }
  ngOnInit(): void {
    this.cargarDatos();
  }
  cargarDatos(): void {
    this.cargando.set(true);
    this.hayError.set(false);
    this.menuServicio.obtenerDatos().subscribe({
      next: (datos) => {
        this.sucursales.set(datos.sucursales);
        this.cargando.set(false);
      },
      error: () => {
        this.cargando.set(false);
        this.hayError.set(true);
      },
    });
  }
  enlaceTelefono(telefono: string): string {
    return 'tel:' + telefono.replace(/[^\d+]/g, '');
  }
}