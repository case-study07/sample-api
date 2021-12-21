import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from "./test.entity";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(() => User, user => user.books)
    user: User;

}