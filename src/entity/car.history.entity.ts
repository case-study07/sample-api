import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import { ListingCar } from "./listing.car.entity";

@Entity()
export class CarHistory { //車歴

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; //自家用車、事業車、レンタカー

    @OneToMany(() => ListingCar, listingCar => listingCar.carHistoryId)
    listingCar: ListingCar[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}