import {MigrationInterface, QueryRunner} from "typeorm";

export class sample1640079539858 implements MigrationInterface {
    name = 'sample1640079539858'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`FK_04f66cf2a34f8efc5dcd9803693\` ON \`book\``);
        await queryRunner.query(`CREATE TABLE \`auction_listing\` (\`id\` int NOT NULL AUTO_INCREMENT, \`text\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`delivery_method\` (\`id\` int NOT NULL AUTO_INCREMENT, \`transport\` varchar(255) NOT NULL, \`cost\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`option\` (\`id\` int NOT NULL AUTO_INCREMENT, \`text\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`payment_methods\` (\`id\` int NOT NULL AUTO_INCREMENT, \`text\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`after_successful_bid\` (\`id\` int NOT NULL AUTO_INCREMENT, \`isFerry\` tinyint NOT NULL, \`isPayment\` tinyint NOT NULL, \`isDelivery\` tinyint NOT NULL, \`isCancelled\` tinyint NOT NULL, \`auctionListingIdId\` int NULL, \`optionIdId\` int NULL, \`deliveryIdId\` int NULL, \`paymentMethodIdId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`photo_metadata\` CHANGE \`photoId\` \`photoId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`after_successful_bid\` ADD CONSTRAINT \`FK_997939f45114c96f4a2555254ec\` FOREIGN KEY (\`auctionListingIdId\`) REFERENCES \`auction_listing\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`after_successful_bid\` ADD CONSTRAINT \`FK_892e4d5ef8f2a7fecc71ac09491\` FOREIGN KEY (\`optionIdId\`) REFERENCES \`option\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`after_successful_bid\` ADD CONSTRAINT \`FK_2fed647037086f2c36767b34d30\` FOREIGN KEY (\`deliveryIdId\`) REFERENCES \`delivery_method\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`after_successful_bid\` ADD CONSTRAINT \`FK_501d35403a68819ee5383d0dfbd\` FOREIGN KEY (\`paymentMethodIdId\`) REFERENCES \`payment_methods\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`photo_metadata\` ADD CONSTRAINT \`FK_99f01ed52303cc16139d69f7464\` FOREIGN KEY (\`photoId\`) REFERENCES \`photo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_04f66cf2a34f8efc5dcd9803693\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_04f66cf2a34f8efc5dcd9803693\``);
        await queryRunner.query(`ALTER TABLE \`photo_metadata\` DROP FOREIGN KEY \`FK_99f01ed52303cc16139d69f7464\``);
        await queryRunner.query(`ALTER TABLE \`after_successful_bid\` DROP FOREIGN KEY \`FK_501d35403a68819ee5383d0dfbd\``);
        await queryRunner.query(`ALTER TABLE \`after_successful_bid\` DROP FOREIGN KEY \`FK_2fed647037086f2c36767b34d30\``);
        await queryRunner.query(`ALTER TABLE \`after_successful_bid\` DROP FOREIGN KEY \`FK_892e4d5ef8f2a7fecc71ac09491\``);
        await queryRunner.query(`ALTER TABLE \`after_successful_bid\` DROP FOREIGN KEY \`FK_997939f45114c96f4a2555254ec\``);
        await queryRunner.query(`ALTER TABLE \`book\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`photo_metadata\` CHANGE \`photoId\` \`photoId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`after_successful_bid\``);
        await queryRunner.query(`DROP TABLE \`payment_methods\``);
        await queryRunner.query(`DROP TABLE \`option\``);
        await queryRunner.query(`DROP TABLE \`delivery_method\``);
        await queryRunner.query(`DROP TABLE \`auction_listing\``);
        await queryRunner.query(`CREATE INDEX \`FK_04f66cf2a34f8efc5dcd9803693\` ON \`book\` (\`userId\`)`);
    }

}
