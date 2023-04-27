import { IsString, MinLength } from "class-validator"

export class CreateUsuarioDto {


    @IsString()
    @MinLength(3)
    nickname: string

    @IsString()
    @MinLength(2)
    nombre: string

    @IsString()
    @MinLength(2)
    apellido: string

    @IsString()
    @MinLength(2)
    telefono: string

    @IsString()
    @MinLength(2)
    correo: string

    @IsString()
    // @MinLength(2)
    genero: string

    @IsString()
    // @MinLength(2)
    nacimiento: string
}
