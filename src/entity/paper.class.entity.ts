import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import { ListingCar } from "./listing.car.entity";

@Entity()
export class PaperClass { //紙類

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    securityDocument: string; //新車保証書

    @Column()
    manual: string; //取扱説明書

    @OneToMany(() => ListingCar, listingCar => listingCar.paperClassId)
    listingCar: ListingCar[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}