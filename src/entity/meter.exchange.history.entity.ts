import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import { ListingCar } from "./listing.car.entity";

@Entity()
export class MeterExchangeHistory { //メーター交換歴

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string; //交換車、改ざん車、不明車

    @OneToMany(() => ListingCar, listingCar => listingCar.meterExchangeHistoryId)
    listingCar: ListingCar[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}