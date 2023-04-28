import { Injectable } from '@nestjs/common';
import { CreateHashtagDto } from './dto/create-hashtag.dto';
import { UpdateHashtagDto } from './dto/update-hashtag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hashtag } from './entities/hashtag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HashtagService {

  constructor(
    @InjectRepository(Hashtag)
    private hashtagRepo: Repository<Hashtag>
  ) { }

  async create(createHashtagDto: CreateHashtagDto, etiqueta: string) {

    const { ..._hashtag } = createHashtagDto;

    let hashtag = await this.hashtagRepo.findOne({ where: { etiqueta } });

    if (!hashtag) {
      hashtag = this.hashtagRepo.create({
        ..._hashtag
      });
      await this.hashtagRepo.save(hashtag);
    }

    return hashtag;
  }

  findAll() {
    return `This action returns all hashtag`;
  }
}
