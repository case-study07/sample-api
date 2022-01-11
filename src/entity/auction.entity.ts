import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {AuctionListing} from "./auction.listing.entity";
import {Color} from "./color.entity";

@Entity()
export class Auction {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    auctionName: string;

    @ManyToOne(() => Color, color => color.auction)
    colorId: number;

    @Column()
    subtitle: string;
    
    @Column()
    startTime: Date;
    
    @Column()
    selectionImg: string;

    @OneToMany(() => AuctionListing, auctionListing => auctionListing.auctionId)
    auctionListing: AuctionListing[];

}