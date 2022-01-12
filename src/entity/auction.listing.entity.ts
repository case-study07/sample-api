import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {AfterSuccessfulBid} from "./after.successful.bid.entity";
import {Auction} from "./auction.entity";
import {Members} from "./member.entity";
import {PurchaseManagement} from "./purchase.management.entity";

@Entity()
export class AuctionListing { //オークション出品車

    @PrimaryGeneratedColumn()
    id: number;

    //オークションID
    @ManyToOne(() => Auction, auction => auction.auctionListing)
    auctionId: number;

    //仕入れ管理ID
    @ManyToOne(() => PurchaseManagement, purchaseManagement => purchaseManagement.auctionListing)
    purchaseManagementId: number;

    //落札価格
    @Column()
    hammerPrice: number;

    //会員ID
    @ManyToOne(() => Members, members => members.auctionListing)
    membersId: number;

    //車体ID
    // @ManyToOne(() => CarBodyNumber, carBodyNumber => carBodyNumber.auctionListing)
    // carId:number;

    @OneToMany(() => AfterSuccessfulBid, afterSuccessfulBid => afterSuccessfulBid.auctionListingId)
    afterSuccessfulBid: AfterSuccessfulBid[]; 

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}