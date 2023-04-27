import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './entities/tweet.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Module({
  controllers: [TweetsController],
  providers: [TweetsService],
  imports: [TypeOrmModule.forFeature([Tweet, Usuario])]
})
export class TweetsModule { }
