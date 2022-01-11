import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Admin {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    adminId: string;

    @Column()
    password: string;
}