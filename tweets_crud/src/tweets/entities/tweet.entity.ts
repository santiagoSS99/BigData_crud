import { Mencion } from "src/mencion/entities/mencion.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tweet {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    publicacion: string

    @Column()
    creado_en: string

    @ManyToOne(() => Usuario, (user) => user.tweets)
    usuario: Usuario

    @OneToMany(() => Mencion, (mencion) => mencion.tweet)
    menciones: Mencion[];
}
