import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MencionService } from './mencion.service';
import { CreateMencionDto } from './dto/create-mencion.dto';
import { UpdateMencionDto } from './dto/update-mencion.dto';

@Controller('mencion')
export class MencionController {
  constructor(private readonly mencionService: MencionService) { }

  @Post()
  añadirUsuario(@Body() createMencionDto: CreateMencionDto,
    @Param('nick') nickname: string) {
    return this.mencionService.create(createMencionDto, nickname);
  }

  @Get()
  findAll() {
    return this.mencionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mencionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMencionDto: UpdateMencionDto) {
    return this.mencionService.update(+id, updateMencionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mencionService.remove(+id);
  }
}
