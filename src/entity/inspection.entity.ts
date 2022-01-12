import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import { ListingCar } from "./listing.car.entity";

@Entity()
export class Inspection { //検査

    @PrimaryGeneratedColumn()
    id: number;

    @Column() //キズ
    isPS: boolean

    @Column() //コゲ
    isPW: boolean

    @Column() //コゲ穴
    isAW: boolean

    @Column() //汚れ
    isSR: boolean

    @Column() //破れ
    isBACK: boolean

    @Column() //A
    isPEEL: boolean

    @Column() //X要ス
    isAB: boolean

    @OneToMany(() => ListingCar, listingCar => listingCar.inspectionId)
    listingCar: ListingCar[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}