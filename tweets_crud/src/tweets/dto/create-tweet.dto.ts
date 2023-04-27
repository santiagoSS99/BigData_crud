import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateTweetDto {

    @IsString()
    publicacion: string;

    @IsNumber()
    userId: number;

    @IsDateString()
    creado_en: string

}
