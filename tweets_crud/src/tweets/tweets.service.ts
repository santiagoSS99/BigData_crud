import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Repository } from 'typeorm';
import { Tweet } from './entities/tweet.entity';
import { Mencion } from 'src/mencion/entities/mencion.entity';
import { async } from 'rxjs';

@Injectable()
export class TweetsService {

  constructor(
    @InjectRepository(Usuario)
    private userRepository: Repository<Usuario>,
    @InjectRepository(Tweet)
    private twRepository: Repository<Tweet>,
    @InjectRepository(Mencion)
    private mencionRepository: Repository<Mencion>
  ) { }

  // async create(createTweetDto: CreateTweetDto, userId) {

  //   const currentUser = await this.userRepository.findOne({
  //     where: { id: userId },
  //     relations: ['tweets']
  //   });

  //   if (!currentUser) throw new NotFoundException(`User not found`)

  //   const twData = this.twRepository.create({
  //     ...createTweetDto,
  //     usuario: currentUser
  //   })

  //   const mencion = this.mencionRepository.create({
  //     menciones: 
  //   })

  //   return this.twRepository.save(twData)
  // }

  async create(createTweetDto: CreateTweetDto, userId) {
    const currentUser = await this.userRepository.findOne({
      where: { id: userId },
      // relations: ['tweets'],
    });

    if (!currentUser) {
      throw new NotFoundException(`User not found`);
    }

    const tweetData = {
      ...createTweetDto,
      usuario: currentUser,
    };

    const newTweet = await this.twRepository.create(tweetData);
    const savedTweet = await this.twRepository.save(newTweet);

    if (createTweetDto.menciones && createTweetDto.menciones.length > 0) {
      const menciones = createTweetDto.menciones.map((mencion) => {
        const newMencion = this.mencionRepository.create({
          ...mencion,
          tweet: savedTweet,
        });
        console.log(mencion)
        return newMencion;
      });

      await this.mencionRepository.save(menciones);
    }

    return savedTweet;
  }


  async findAll(): Promise<Tweet[]> {
    const tweets = await this.twRepository
      .createQueryBuilder('tweet')
      .leftJoinAndSelect('tweet.usuario', 'usuario')
      .select(['tweet.id', 'tweet.publicacion', 'usuario.nombre', 'tweet.creado_en'])
      .getMany();
    return tweets;
  }


  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  async remove(id: string) {
    const tweet = await this.twRepository.findOne({
      where: { id }
    });

    if (!tweet) {
      throw new NotFoundException(`Tweet with ID ${id} not found`);
    }

    await this.twRepository.delete(tweet);
  }
}
