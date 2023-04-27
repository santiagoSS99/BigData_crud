import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsuarioModule } from './usuario/usuario.module';
import { TweetsModule } from './tweets/tweets.module';
import { MencionModule } from './mencion/mencion.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mysql",
      // host: 'localhost',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true
    }),
    UsuarioModule,
    TweetsModule,
    MencionModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
