import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HashtagService } from './hashtag.service';
import { CreateHashtagDto } from './dto/create-hashtag.dto';
import { UpdateHashtagDto } from './dto/update-hashtag.dto';

@Controller('hashtag')
export class HashtagController {
  constructor(private readonly hashtagService: HashtagService) { }

  @Post('crear/:etiqueta')
  create(
    @Param('etiqueta') etiqueta: string,
    @Body() createHashtagDto: CreateHashtagDto,
  ) {
    return this.hashtagService.create(createHashtagDto, etiqueta);
  }

  @Get()
  findAll() {
    return this.hashtagService.findAll();
  }
}
