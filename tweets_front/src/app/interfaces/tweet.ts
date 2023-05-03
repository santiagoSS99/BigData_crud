import { Hashtag } from "./hasthag";
import { Mencion } from "./mencion";
import { Usuario } from "./usuario";
export interface Tweet {
    id?: string; // El ID podría ser opcional si se crea en el servidor
    publicacion: string;
    creado_en?: string; // La fecha de creación también podría ser opcional
    usuario: string; // ID del usuario que crea el tweet
    hashtag?: Hashtag[]; // Array de hashtags asociados al tweet (puede ser opcional)
    mencion?: Mencion[]; // Array de menciones asociadas al tweet (puede ser opcional)
}