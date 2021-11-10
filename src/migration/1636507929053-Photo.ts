import {MigrationInterface, QueryRunner} from "typeorm";

export class Photo1636507929053 implements MigrationInterface {
    name = 'Photo1636507929053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`photo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`description\` text NOT NULL, \`filename\` varchar(255) NOT NULL, \`views\` double NOT NULL, \`isPublished\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`photo\``);
    }

}
