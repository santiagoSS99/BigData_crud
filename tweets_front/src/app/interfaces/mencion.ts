import { Usuario } from "./usuario";

export interface Mencion {
  id: number;
  fecha_mencion: string;
  usuarioMencionado: Usuario;
}