import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MencionService } from './mencion.service';
import { CreateMencionDto } from './dto/create-mencion.dto';
import { UpdateMencionDto } from './dto/update-mencion.dto';

@Controller('mencion')
export class MencionController {
  constructor(private readonly mencionService: MencionService) { }

  @Post(':nick')
  añadirUsuario(@Body() createMencionDto: CreateMencionDto,
    @Param('nick') nickname: string) {
    return this.mencionService.create(createMencionDto, nickname);
  }

}
