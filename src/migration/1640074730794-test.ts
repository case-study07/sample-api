import {MigrationInterface, QueryRunner} from "typeorm";

export class test1640074730794 implements MigrationInterface {
    name = 'test1640074730794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`photo\` DROP FOREIGN KEY \`FK_4494006ff358f754d07df5ccc87\``);
        await queryRunner.query(`CREATE TABLE \`book\` (\`id\` int NOT NULL AUTO_INCREMENT, \`url\` varchar(255) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`photo\` DROP COLUMN \`url\``);
        await queryRunner.query(`ALTER TABLE \`photo\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`photo_metadata\` DROP FOREIGN KEY \`FK_99f01ed52303cc16139d69f7464\``);
        await queryRunner.query(`ALTER TABLE \`photo_metadata\` CHANGE \`photoId\` \`photoId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`photo_metadata\` ADD CONSTRAINT \`FK_99f01ed52303cc16139d69f7464\` FOREIGN KEY (\`photoId\`) REFERENCES \`photo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_04f66cf2a34f8efc5dcd9803693\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_04f66cf2a34f8efc5dcd9803693\``);
        await queryRunner.query(`ALTER TABLE \`photo_metadata\` DROP FOREIGN KEY \`FK_99f01ed52303cc16139d69f7464\``);
        await queryRunner.query(`ALTER TABLE \`photo_metadata\` CHANGE \`photoId\` \`photoId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`photo_metadata\` ADD CONSTRAINT \`FK_99f01ed52303cc16139d69f7464\` FOREIGN KEY (\`photoId\`) REFERENCES \`photo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`photo\` ADD \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`photo\` ADD \`url\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`book\``);
        await queryRunner.query(`ALTER TABLE \`photo\` ADD CONSTRAINT \`FK_4494006ff358f754d07df5ccc87\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
