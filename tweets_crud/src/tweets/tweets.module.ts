import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Mencion } from 'src/mencion/entities/mencion.entity';
import { Tweet } from './entities/tweet.entity';

@Module({
  controllers: [TweetsController],
  providers: [TweetsService],
  imports: [TypeOrmModule.forFeature([Tweet, Usuario, Mencion])]
})
export class TweetsModule { }
