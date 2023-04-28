import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HashtagService } from './hashtag.service';
import { CreateHashtagDto } from './dto/create-hashtag.dto';
import { UpdateHashtagDto } from './dto/update-hashtag.dto';

@Controller('hashtag')
export class HashtagController {
  constructor(private readonly hashtagService: HashtagService) { }

  @Post()
  create(@Body() createHashtagDto: CreateHashtagDto,
    @Param('etiqueta') etiqueta: string
  ) {
    return this.hashtagService.create(createHashtagDto, etiqueta);
  }

  @Get()
  findAll() {
    return this.hashtagService.findAll();
  }
}
