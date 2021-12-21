import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {AfterSuccessfulBid} from "./after.successful.bid.entity";

@Entity()
export class PaymentMethods {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @OneToMany(() => AfterSuccessfulBid, afterSuccessfulBid => afterSuccessfulBid.paymentMethodId)
    afterSuccessfulBid: AfterSuccessfulBid[];

}