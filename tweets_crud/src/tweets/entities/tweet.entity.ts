import { Hashtag } from "src/hashtag/entities/hashtag.entity";
import { Mencion } from "src/mencion/entities/mencion.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => Mencion, (mencion) => mencion.tweet, { cascade: true })
    menciones: Mencion[];

    @ManyToMany(() => Hashtag)
    @JoinColumn({
        name: 'tweets_hashtags',
        // joinColumn: { name: 'tweet_id', referencedColumnName: 'id' }
    })
    hashtag: Hashtag[]
}
