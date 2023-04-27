import { PartialType } from '@nestjs/mapped-types';
import { CreateMencionDto } from './create-mencion.dto';

export class UpdateMencionDto extends PartialType(CreateMencionDto) {}
