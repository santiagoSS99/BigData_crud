import { Tweet } from "src/tweets/entities/tweet.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hashtag {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    etiqueta: string

    @ManyToMany(() => Tweet, (tw) => tw.hashtag)
    tweet: Tweet[]

}
