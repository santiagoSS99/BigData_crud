import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Repository } from 'typeorm';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class TweetsService {

  constructor(
    @InjectRepository(Usuario)
    private userRepository: Repository<Usuario>,
    @InjectRepository(Tweet)
    private twRepository: Repository<Tweet>
  ) { }

  async create(createTweetDto: CreateTweetDto, userId) {

    // const { ...tweet } = createTweetDto
    // const tweeting = this.twRepository.create({
    //   ...tweet
    // })

    // await this.twRepository.save(tweeting)

    const currentUser = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['tweets']
    });

    if (!currentUser) throw new NotFoundException(`User not found`)

    // Aqui tuve un error debido a que el usuario espera un objeto, y le estaba pasand literalmente esto
    // const twData = this.twRepository.create({
    //   ...createTweetDto,
    //   currentUser,
    // })
    // Esto no se puede hacer

    const twData = this.twRepository.create({
      ...createTweetDto,
      usuario: currentUser
    })

    return this.twRepository.save(twData)
  }

  findAll() {
    return `This action returns all tweets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
