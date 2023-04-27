import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMencionDto } from './dto/create-mencion.dto';
import { UpdateMencionDto } from './dto/update-mencion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Repository } from 'typeorm';
import { Mencion } from './entities/mencion.entity';

@Injectable()
export class MencionService {

  constructor(
    @InjectRepository(Usuario)
    private userRepo: Repository<Usuario>,
    @InjectRepository(Mencion)
    private mentionRepo: Repository<Mencion>,
  ) { }

  async create(createMencionDto: CreateMencionDto, nick) {

    const user = this.userRepo.findOne({
      where: { nickname: nick },
      // relations: ['tweets']
    })

    if (!user) throw new NotFoundException(`User cannot be tagged`)

    const mencion = this.mentionRepo.create({
      ...createMencionDto,
      // usuarioMencionado: user
    })
  }

}
