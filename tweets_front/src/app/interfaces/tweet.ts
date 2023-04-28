import { Usuario } from "./usuario";

export interface Tweet {
    id: string;
    publicacion: string;
    creado_en: string;
    usuario: Usuario;
}