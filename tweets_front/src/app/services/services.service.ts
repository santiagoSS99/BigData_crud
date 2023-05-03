import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Observable, map } from 'rxjs';
import { Tweet } from '../interfaces/tweet';
import { Mencion } from '../interfaces/mencion';
import { Hashtag } from '../interfaces/hasthag';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  BASE_URL: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.BASE_URL}usuario/crear`, usuario)
  }
  // Cambiar
  crearTweet(tweet: Tweet, userId: string): Observable<Tweet> {
    const tweetConUsuario = { ...tweet, usuario: userId };
    return this.http.post<Tweet>(`${this.BASE_URL}tweets/create/${userId}`, tweetConUsuario, { responseType: 'json' })
  }

  obtenerTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(`${this.BASE_URL}tweets`)
      .pipe(
        map((tweets: any[]) => tweets.map(tweet => ({
          ...tweet,
          usuario: tweet.usuario.nombre // Reemplazar "nombre" con el nombre de la propiedad que contiene el nombre del usuario en el modelo
        })))
      );
  }
  // Cambiar
  crearMencion(nick: string, mencion: Mencion): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.BASE_URL}mencion/${nick}`, mencion)
  }

  crearHashtag(etiqueta: string, hashtag: Hashtag): Observable<Hashtag> {
    return this.http.post<Hashtag>(`${this.BASE_URL}hashtag/crear/${etiqueta}`, hashtag)
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.BASE_URL}usuario`)
  }

  obtenerUsuarioPorId(id: string) {
    return this.http.get(`${this.BASE_URL}usuario/${id}`)
  }

  borrartweet(id: string) {
    return this.http.delete(`${this.BASE_URL}tweets/${id}`)
  }

}
