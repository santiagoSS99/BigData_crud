import { IsNotEmpty } from "class-validator";
import { Tweet } from "src/tweets/entities/tweet.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateMencionDto {
    @IsNotEmpty()
    usuarioMencionado: Usuario;

    @IsNotEmpty()
    tweet: Tweet;
}
