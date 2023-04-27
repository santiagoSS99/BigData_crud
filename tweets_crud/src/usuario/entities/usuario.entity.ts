import { Mencion } from "src/mencion/entities/mencion.entity"
import { Tweet } from "src/tweets/entities/tweet.entity"
import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id: string

    // @PrimaryColumn({ type: 'char', })
    @Column()
    nickname: string

    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column()
    telefono: string

    @Column()
    correo: string

    @Column()
    genero: string

    @Column()
    nacimiento: string

    @OneToMany(() => Tweet, (tw) => tw.usuario)
    tweets: Tweet[]

    @OneToMany(() => Mencion, (mencion) => mencion.usuarioMencionado)
    mencionesRecibidas: Mencion[]

}
