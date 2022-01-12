import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import {AuctionListing} from "./auction.listing.entity";
import {DeliveryMethod} from "./delivery.method.entity";
import {Option} from "./option.entity";
import {PaymentMethods} from "./payment.methods.entity";

@Entity()
export class AfterSuccessfulBid { //落札後

    @PrimaryGeneratedColumn()
    id: number;

    //オークション出品車
    @ManyToOne(() => AuctionListing, auctionListing => auctionListing.afterSuccessfulBid)
    auctionListingId: number;

    //オプション
    @ManyToOne(() => Option, option => option.afterSuccessfulBid)
    optionId: number;

    //配送
    @ManyToOne(() => DeliveryMethod, delivery => delivery.afterSuccessfulBid)
    deliveryId: number;

    //フェリー
    @Column()
    isFerry: boolean

    //支払い方法
    @ManyToOne(() => PaymentMethods, payment => payment.afterSuccessfulBid)
    paymentMethodId: number;

    //入金
    @Column()
    isPayment: boolean

    //納品
    @Column()
    isDelivery: boolean
    
    //キャンセル
    @Column()
    isCancelled: boolean

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}