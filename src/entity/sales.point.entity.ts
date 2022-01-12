import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ListingCar } from "./listing.car.entity";

@Entity()
export class SalesPoint { //セールスポイント

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    point1: string; //セールスポイント１

    @Column()
    point2: string; //セールスポイント２

    @Column()
    point3: string; //セールスポイント３
    
    @Column()
    point4: string; //セールスポイント４
    
    @Column()
    point5: string; //セールスポイント５
    

    @OneToMany(() => ListingCar, listingCar => listingCar.salesPointId)
    listingCar: ListingCar[];

}