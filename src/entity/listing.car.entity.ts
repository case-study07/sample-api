import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import { EvaluationPoint } from "./evaluation.point.entity";
import { TestingRecord } from "./testing.record.entity";
import { SalesPoint } from "./sales.point.entity";
import { PaperClass } from "./paper.class.entity";
import { Cigarette } from "./cigarette.entity";
import { MeterExchangeHistory } from "./meter.exchange.history.entity";
import { ScratchEvaluation } from "./scratch.evaluation.entity";
import { CarBodyImage } from "./car.body.image.entity";
import { Addition } from "./addition.entity";
import { Inspection } from "./inspection.entity";
import { SuggestedListing } from "./suggested.listing.entity";
import { CarBodyEvaluation } from "./car.body.evaluation.entity";
import { CarHistory } from "./car.history.entity";

@Entity()
export class ListingCar { //出品車

    @PrimaryGeneratedColumn()
    id: number;

    //評価点
    @ManyToOne(() => EvaluationPoint, evaluationPoint => evaluationPoint.listingCar)
    evaluationId: number;

    //出品店記入
    @ManyToOne(() => TestingRecord, testingRecord => testingRecord.listingCar)
    testingRecordId: number;

    //セールスポイント
    @ManyToOne(() => SalesPoint, salesPoint => salesPoint.listingCar)
    salesPointId: number;

    //紙類
    @ManyToOne(() => PaperClass, paperClass => paperClass.listingCar)
    paperClassId: number;

    //タバコ
    @ManyToOne(() => Cigarette, cigarette => cigarette.listingCar)
    cigaretteId: number; 

    //メーター交換歴
    @ManyToOne(() => MeterExchangeHistory, meterExchangeHistory => meterExchangeHistory.listingCar)
    meterExchangeHistoryId: number;
    
    //傷評価
    @ManyToOne(() => ScratchEvaluation, scratchEvaluation => scratchEvaluation.listingCar)
    scratchEvaluationId: number;

    //車体画像
    @ManyToOne(() => CarBodyImage, carBodyImage => carBodyImage.listingCar)
    carBodyImageId: number;

    //付加
    @ManyToOne(() => Addition, addition => addition.listingCar)
    additionId: number;

    //検査
    @ManyToOne(() => Inspection, inspection => inspection.listingCar)
    inspectionId: number;
    
    //希望出品２
    @ManyToOne(() => SuggestedListing, suggestedListing => suggestedListing.listingCar)
    suggestedListingId: number;

    //車体評価
    @ManyToOne(() => CarBodyEvaluation, carBodyEvaluation => carBodyEvaluation.listingCar)
    carBodyEvaluationId: number;

    //車歴
    @ManyToOne(() => CarHistory, carHistory => carHistory.listingCar)
    carHistoryId: number;

    //車検
    @Column()
    carHistory: string; 

    //仕入れ額
    @Column()
    suggestedAmount: number;

    //走行距離
    @Column()
    mileage: number;

    //外装
    @Column()
    exterior: number;

    //内装
    @Column()
    interior: number;

    //色替
    @Column()
    IschangeColor: number;

    //希望出品１
    @Column()
    suggestedListing: number;


    // @OneToMany(() => CarBodyNumber, carBodyNumber => carBodyNumber.listingCarId)
    // carBodyNumber: CarBodyNumber[]; 車体ID

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}