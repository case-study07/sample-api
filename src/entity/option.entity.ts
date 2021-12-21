import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {AfterSuccessfulBid} from "./after.successful.bid.entity";

@Entity()
export class Option {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @OneToMany(() => AfterSuccessfulBid, afterSuccessfulBid => afterSuccessfulBid.optionId)
    afterSuccessfulBid: AfterSuccessfulBid[]; 

}