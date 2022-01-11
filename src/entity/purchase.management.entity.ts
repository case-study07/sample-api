import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { AuctionListing } from "./auction.listing.entity";


@Entity()
export class PurchaseManagement {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    purchaseData: Date;

    @Column()
    supplier: string
    
    @Column()
    purchaseAmount: number;

    @Column()
    expense: number;

    @Column()
    nameStrangePeriod: Date;

    @Column()
    note: string;

    @Column()
    purchasingCost: number;

    @Column()
    tax: number;

    @Column()
    salesDate: Date;

    @Column()
    salesTarget: string;

    @Column()
    rep: string;

    @Column()
    sales: number;

    @Column()
    fee: number;

    @Column()
    salesTotal: number;

    @Column()
    netProfit: number;

    @Column()
    selfTax: number;

    @Column()
    nameChangeDate: Date;

    @OneToMany(() => AuctionListing, auctionListing => auctionListing.purchaseManagementId)
    auctionListing: AuctionListing[];

}