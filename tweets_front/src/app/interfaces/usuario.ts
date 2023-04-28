export interface Usuario {
    id?: string;
    nickname: string;
    nombre: string;
    apellido: string;
    telefono?: string | null;
    correo: string;
    genero?: string | null;
    nacimiento: string;
}