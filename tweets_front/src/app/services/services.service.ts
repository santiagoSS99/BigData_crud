import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';
import { Tweet } from '../interfaces/tweet';
import { Mencion } from '../interfaces/mencion';
import { Hashtag } from '../interfaces/hasthag';

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
  crearTweet(userId: string): Observable<Tweet> {
    return this.http.post<Tweet>(`${this.BASE_URL}/tweets/create${userId}`, null, { responseType: 'json' })
  }
  // Cambiar
  crearMencion(nick: string, mencion: Mencion): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.BASE_URL}/mencion/${nick}`, mencion)
  }

  crearHashtag(hashtag: Hashtag, etiqueta: string): Observable<Hashtag> {
    return this.http.post<Hashtag>(`${this.BASE_URL}/hashtag/crear/${etiqueta}`, hashtag)
  }

}
