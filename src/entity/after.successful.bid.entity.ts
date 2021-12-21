import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {AuctionListing} from "./auction.listing.entity";
import {DeliveryMethod} from "./delivery.method.entity";
import {Option} from "./option.entity";
import {PaymentMethods} from "./payment.methods.entity";

@Entity()
export class AfterSuccessfulBid {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => AuctionListing, auctionListing => auctionListing.afterSuccessfulBid)
    auctionListingId: number;

    @ManyToOne(() => Option, option => option.afterSuccessfulBid)
    optionId: number;

    @ManyToOne(() => DeliveryMethod, delivery => delivery.afterSuccessfulBid)
    deliveryId: number;

    @Column()
    isFerry: boolean

    @ManyToOne(() => PaymentMethods, payment => payment.afterSuccessfulBid)
    paymentMethodId: number;

    @Column()
    isPayment: boolean

    @Column()
    isDelivery: boolean
    
    @Column()
    isCancelled: boolean
}