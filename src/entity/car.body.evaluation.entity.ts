import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ListingCar } from "./listing.car.entity";

@Entity()
export class CarBodyEvaluation { //車体評価

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    left_f_tire: string; //左Fタイヤ

    @Column()
    left_r_tire: string; //左Rタイヤ
    
    @Column()
    right_f_tire: string; //右Fタイヤ
    
    @Column()
    right_r_tire: string; //右Rタイヤ
    
    @Column()
    spare_tire: string; //スペアタイヤ
    
    @Column()
    f_bumper: string; //Fバンパー
    
    @Column()
    left_f_fender: string; //左Fフェンダー
    
    @Column()
    left_f_door: string; //左Fドア
    
    @Column()
    left_locker_panel: string; //左ロッカーパネル
    
    @Column()
    left_r_door: string; //左Rドア
    
    @Column()
    left_quarter: string; //左クォーター
    
    @Column()
    left_r_bumper: string; //左Rバンパー
    
    @Column()
    bonnet: string; //ボンネット
    
    @Column()
    f_under_aero_parts: string; //Fアンダースポイラ
    
    @Column()
    f_glass: string; //Fガラス
    
    @Column()
    roof: string; //ルーフ
    
    @Column()
    r_glass: string; //Rガラス
    
    @Column()
    trunk: string; //トランク
    
    @Column()
    r_under_aero_parts: string; //Rアンダースポイラ
    
    @Column()
    f_panel: string; //Fパネル
    
    @Column()
    right_fender: string; //右フェンダー
    
    @Column()
    right_door: string; //右ドア
    
    @Column()
    right_locker_panel: string; //右ロッカーパネル
    
    @Column()
    right_r_door: string; //右Rドア
    
    @Column()
    right_quarter: string; //右クォーター
    
    @Column()
    r_panel: string; //Rパネル

    @OneToMany(() => ListingCar, listingCar => listingCar.carBodyEvaluationId)
    listingCar: ListingCar[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}