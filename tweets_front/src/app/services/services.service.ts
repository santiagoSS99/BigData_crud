import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  BASE_URL: string = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.BASE_URL}/usuario/crear`, usuario)
  }
  // Cambiar
  crearTweet(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.BASE_URL}/usuario/crear`, usuario)
  }
  // Cambiar
  crearMencion(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.BASE_URL}/usuario/crear`, usuario)
  }
}
