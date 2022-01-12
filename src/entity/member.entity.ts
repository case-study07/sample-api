import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import {AuctionListing} from "./auction.listing.entity";

@Entity()
export class Members { //会員

    @PrimaryGeneratedColumn()
    id: number;

    //名前
    @Column()
    name: string;

    //企業名
    @Column()
    companyName: string;

    //メールアドレス
    @Column()
    email: string;

    //パスワード
    @Column()
    password: string;

    //電話番号
    @Column()
    phoneNumber: number;

    //アイコン画像
    @Column()
    iconImage: string;
    
    //住所
    @Column()
    address: string;
    
    //悪質フラグ
    @Column()
    malicuousFlag: boolean;

    //与信チェック
    @Column()
    creditCheck: boolean;
    
    @OneToMany(() => AuctionListing, auctionListing => auctionListing.membersId)
    auctionListing: AuctionListing[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}