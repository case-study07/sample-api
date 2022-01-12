import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import {AfterSuccessfulBid} from "./after.successful.bid.entity";

@Entity()
export class PaymentMethods { //支払い方法

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Methods: string;

    @OneToMany(() => AfterSuccessfulBid, afterSuccessfulBid => afterSuccessfulBid.paymentMethodId)
    afterSuccessfulBid: AfterSuccessfulBid[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}