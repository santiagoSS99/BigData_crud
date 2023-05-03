import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Usuario } from '../interfaces/usuario';
import { Tweet } from '../interfaces/tweet';
import { Hashtag } from '../interfaces/hasthag';
import { Mencion } from '../interfaces/mencion';

@Component({
  selector: 'app-posttwitter',
  templateUrl: './posttwitter.component.html',
  styleUrls: ['./posttwitter.component.scss']
})
export class PosttwitterComponent implements OnInit {

  constructor(private servicesService: ServicesService) { }

  userId: any;
  usuarios: any;
  etiqueta: any;
  usuarioSeleccionado: any;
  usuarioTaggeado: any;

  usuario: Usuario = {
    nickname: "",
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    genero: "",
    nacimiento: ""
  };

  tweet: Tweet = {
    publicacion: '',
    creado_en: '',
    usuario: '',
    hashtag: undefined,
    mencion: undefined
  };

  hashtag: Hashtag = {
    etiqueta: '',
    tweets: []
  };

  mencion: Mencion = {
    fecha_mencion: '',
    usuarioMencionado: ''
  };

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.servicesService.obtenerUsuarios().subscribe((res) => {
      this.usuarios = res;
      console.log(this.usuarios);
    });
  }

  publicarTweet(userId: string, mentionedUser: string) {
    this.usuarioSeleccionado = userId;

    const tweet: Tweet = {
      publicacion: this.tweet.publicacion,
      creado_en: new Date().toISOString(),
      usuario: userId,
      hashtag: this.tweet.hashtag,
      mencion: this.tweet.mencion
    };

    const hashtag: Hashtag = {
      etiqueta: this.etiqueta,
      tweets: []
    };

    const mencion: Mencion = {
      fecha_mencion: new Date().toISOString(),
      usuarioMencionado: mentionedUser
    };

    this.servicesService.crearTweet(tweet, userId).subscribe(res =>
      console.log(res)
    );

    this.servicesService.crearHashtag(hashtag.etiqueta, hashtag).subscribe((res) =>
      console.log(res)
    );

    this.servicesService.crearMencion(mencion.usuarioMencionado, mencion).subscribe(res => {
      console.log(res)
    });
  }

  seleccionarUsuario2(usuario: any) {
    this.usuarioSeleccionado = usuario;
    console.log(usuario);
  }

  taggearUsuario(usuario: any) {
    this.usuarioTaggeado = usuario;
    console.log(usuario);
  }

  prinseleccion() {
    console.log(this.usuarioSeleccionado);
  }

  prinseleccion2() {
    console.log(this.usuarioTaggeado);
  }
}
