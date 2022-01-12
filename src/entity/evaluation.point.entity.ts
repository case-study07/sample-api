import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import { ListingCar } from "./listing.car.entity";

@Entity()
export class EvaluationPoint { //評価点

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    evaluation: string; //評価点（S,6,5,4,3など）

    @OneToMany(() => ListingCar, listingCar => listingCar.evaluationId)
    listingCar: ListingCar[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}