import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import { ListingCar } from "./listing.car.entity";

@Entity()
export class SuggestedListing { //希望出品

    //ここも一旦stringにしています。

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    car: string; //乗用車

    @Column()
    minivanCampWagon: string; //ミニバン、キャンプワゴン

    @Column()
    vanTruck: string; //バン、トラ

    @Column()
    ligthCar: string; //軽４
    
    @Column()
    dressUp: string; //ドレスUP

    @Column()
    importedCar: string; //輸入車

    @Column()
    refresh: string; //リフレッシュ

    @Column()
    sellout: string; //0円売り切り

    @Column()
    firstNg: string; //乗用車ファーストNG

    @Column()
    reverse: string; //リバース

    @Column()
    largeSize: string; //大型

    @Column()
    recycling: string; //リサイクル

    @Column()
    orange: string; //オレンジ
  
    @OneToMany(() => ListingCar, listingCar => listingCar.suggestedListingId)
    listingCar: ListingCar[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}