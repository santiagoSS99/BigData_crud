import { Type } from "class-transformer";
import { IsDateString, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateMencionDto } from "src/mencion/dto/create-mencion.dto";
export class CreateTweetDto {
    @IsString()
    publicacion: string;

    @IsNumber()
    userId: number;

    @IsDateString()
    creado_en: string;

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreateMencionDto)
    menciones: CreateMencionDto[];

    @IsOptional()
    hashtags: string[];
}
