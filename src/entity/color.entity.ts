import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Auction} from "./auction.entity";

@Entity()
export class Color {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Auction, auction => auction.colorId)
    auction: Auction[];

}