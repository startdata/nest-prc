// entities에 데이터베이스의 모델을 만들어야한다.

import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    year: number;
    // @Column()
    // genres: string[];
}