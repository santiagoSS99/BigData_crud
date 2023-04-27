import { Module } from '@nestjs/common';
import { MencionService } from './mencion.service';
import { MencionController } from './mencion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mencion } from './entities/mencion.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Module({
  controllers: [MencionController],
  providers: [MencionService],
  imports: [TypeOrmModule.forFeature([Mencion, Usuario])]
})
export class MencionModule { }
