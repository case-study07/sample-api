import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import { ListingCar } from "./listing.car.entity";

@Entity()
export class ScratchEvaluation { //傷評価

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    badEvaluation: string; //A,U,W,X,XX,P,S,C,Bなど

    @OneToMany(() => ListingCar, listingCar => listingCar.scratchEvaluationId)
    listingCar: ListingCar[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}