import { Injectable, Param } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private userRepository: Repository<Usuario>
  ) { }

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const { ..._user } = createUsuarioDto
      const user = this.userRepository.create({
        ..._user
      });
      await this.userRepository.save(user)
    } catch (error) {
      alert(error)
    }
  }

  async findAll() {
    const usuarios = await this.userRepository.find();
    return usuarios
  }

  findOne(@Param('id') id: string) {
    return this.userRepository.findOneBy({ id: id })
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
