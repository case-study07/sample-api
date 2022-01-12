import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ListingCar } from "./listing.car.entity";

@Entity()
export class CarBodyImage { //車体画像

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    img1: string;
    
    @Column()
    img2: string;
    
    @Column()
    img3: string;
    
    @Column()
    img4: string;

    @Column()
    img5: string;

    @OneToMany(() => ListingCar, listingCar => listingCar.carBodyImageId)
    listingCar: ListingCar[];

}