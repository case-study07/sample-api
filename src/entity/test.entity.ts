import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Book} from "./user.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Book, book => book.user)
    books: Book[];

}