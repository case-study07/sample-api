import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {AuctionListing} from "./auction.listing.entity";

@Entity()
export class Members {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    companyName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => AuctionListing, auctionListing => auctionListing.membersId)
    auctionListing: AuctionListing[];

}