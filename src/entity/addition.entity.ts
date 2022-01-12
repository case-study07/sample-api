import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import { ListingCar } from "./listing.car.entity";

@Entity()
export class Addition { //付加

    @PrimaryGeneratedColumn()
    id: number;

    @Column() //PS
    isPS: boolean

    @Column() //PW
    isPW: boolean

    @Column() //AW
    isAW: boolean

    @Column() //SR
    isSR: boolean

    @Column() //背面
    isBACK: boolean

    @Column() //カワ
    isPEEL: boolean

    @Column() //AB
    isAB: boolean

    @Column() //TV
    isTV: boolean

    @Column() //ナビ
    isNAVI: boolean

    @Column() //Rスポ
    isRSP: boolean

    @Column() //カセット
    isCAS: boolean


    @OneToMany(() => ListingCar, listingCar => listingCar.additionId)
    listingCar: ListingCar[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}