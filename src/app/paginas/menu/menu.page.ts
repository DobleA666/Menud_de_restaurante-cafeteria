import { Component, OnInit, computed, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonSpinner, IonButton, IonBadge, } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cafe, beer, nutrition, fastFood, pizza, iceCream, alertCircle } from 'ionicons/icons';
import { MenuServicio } from '../../servicios/menu.servicio';
import { ProductoMenu } from '../../modelos/producto-menu.modelo';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrl: 'menu.page.scss',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonSpinner, IonButton, IonBadge],
})
export class MenuPage implements OnInit {
  categorias = signal<string[]>([]);
  productos = signal<ProductoMenu[]>([]);
  categoriaSeleccionada = signal<string>('');
  cargando = signal<boolean>(true);
  hayError = signal<boolean>(false);
  productosFiltrados = computed(() =>
    this.productos().filter((producto) => producto.categoria === this.categoriaSeleccionada()),
  );

  constructor(private menuServicio: MenuServicio) {
    addIcons({ cafe, beer, nutrition, fastFood, pizza, iceCream, alertCircle });
  }
  ngOnInit(): void {
    this.cargarDatos();
  }
  cargarDatos(): void {
    this.cargando.set(true);
    this.hayError.set(false);

  this.menuServicio.obtenerDatos().subscribe({
    next: (datos) => {
      this.categorias.set(datos.categorias);
      this.productos.set(datos.productos);
      this.categoriaSeleccionada.set(datos.categorias[0] ?? '');
      this.cargando.set(false);
    },
    error: () => {
      this.cargando.set(false);
      this.hayError.set(true);
    },
  });
  }

  cambiarCategoria(evento: CustomEvent): void {
    this.categoriaSeleccionada.set(String(evento.detail.value));
  }
  formatearPrecio(precio: number): string {
    return precio.toLocaleString('es-PY') + ' Gs.';
  }
}
