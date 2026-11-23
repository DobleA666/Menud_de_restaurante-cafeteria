import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DatosMenu } from '../modelos/datos-menu.modelo';

@Injectable({
  providedIn: 'root',
})
export class MenuServicio {
  private readonly urlMenu: string = environment.urlMenu;
  constructor(private http: HttpClient) {}
  obtenerDatos(): Observable<DatosMenu> {
    return this.http.get<DatosMenu>(this.urlMenu);
  }
}