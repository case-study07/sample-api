import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import { ListingCar } from "./listing.car.entity";

@Entity()
export class TestingRecord { //出品店記入

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    repaired: string; //修復歴

    @Column()
    jack: string; //ジャッキ
    
    @Column()
    tool: string; //工具
    
    @Column() 
    text: string; //出品者記入テキスト

    @Column()
    recycling: string; //リサイクル料金

    @OneToMany(() => ListingCar, listingCar => listingCar.testingRecordId)
    listingCar: ListingCar[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}