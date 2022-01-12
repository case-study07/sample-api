import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import { AuctionListing } from "./auction.listing.entity";


@Entity()
export class PurchaseManagement { //仕入れ管理

    @PrimaryGeneratedColumn()
    id: number;

    //仕入れ日
    @Column()
    purchaseData: Date;

    //仕入れ先
    @Column()
    supplier: string
    
    //仕入金額
    @Column()
    purchaseAmount: number;

    //経費
    @Column()
    expense: number;

    //名変期限
    @Column()
    nameStrangePeriod: Date;

    //備考
    @Column()
    note: string;

    //仕入原価
    @Column()
    purchasingCost: number;

    //消費税
    @Column()
    tax: number;

    //売上日
    @Column()
    salesDate: Date;

    //売上先
    @Column()
    salesTarget: string;

    //担当
    @Column()
    rep: string;

    //売上
    @Column()
    sales: number;

    //手数料
    @Column()
    fee: number;

    //売上合計
    @Column()
    salesTotal: number;

    //純利益
    @Column()
    netProfit: number;

    //自税預
    @Column()
    selfTax: number;

    //名変更日
    @Column()
    nameChangeDate: Date;

    @OneToMany(() => AuctionListing, auctionListing => auctionListing.purchaseManagementId)
    auctionListing: AuctionListing[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}