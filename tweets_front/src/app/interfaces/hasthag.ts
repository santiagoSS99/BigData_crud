import { Tweet } from "./tweet";

export interface Hashtag {
    id?: number;
    etiqueta: string;
    tweets: Tweet[];
}