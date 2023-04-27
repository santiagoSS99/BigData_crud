import { Tweet } from "src/tweets/entities/tweet.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mencion {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fecha_mencion: string

    @ManyToOne(() => Usuario, (user) => user.mencionesRecibidas)
    usuarioMencionado: Usuario

    @ManyToOne(() => Tweet, (tw) => tw.menciones)
    tweet: Tweet
}
