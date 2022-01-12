import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import { ListingCar } from "./listing.car.entity";

@Entity()
export class Cigarette { //タバコ

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    test: string; //禁煙車、喫煙者か

    @OneToMany(() => ListingCar, listingCar => listingCar.cigaretteId)
    listingCar: ListingCar[];
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}