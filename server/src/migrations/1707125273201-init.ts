import {MigrationInterface, QueryRunner} from 'typeorm';

export class Init1707125273201 implements MigrationInterface {
  name = 'Init1707125273201';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_ae4578dcaed5adff96595e6166\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(30) NOT NULL, \`password\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`roleId\` int NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`room_record\` (\`id\` int NOT NULL AUTO_INCREMENT, \`roomId\` int NOT NULL, \`humidity\` int NOT NULL, \`temperature\` int NOT NULL, \`pressure\` int NOT NULL, \`carbonDioxide\` int NOT NULL, \`airIons\` int NOT NULL, \`ozone\` int NOT NULL, \`isCriticalResults\` tinyint NOT NULL, \`recordedDate\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`room\` (\`id\` int NOT NULL AUTO_INCREMENT, \`roomNumber\` varchar(255) NOT NULL, \`roomType\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`person\` (\`id\` int NOT NULL AUTO_INCREMENT, \`studentID\` int NULL, \`name\` varchar(255) NOT NULL, \`studyGroup\` varchar(255) NULL, \`email\` varchar(255) NOT NULL, \`roleId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`person_record\` (\`id\` int NOT NULL AUTO_INCREMENT, \`saturation\` int NOT NULL, \`heartRate\` int NOT NULL, \`temperature\` int NOT NULL, \`isCriticalResults\` tinyint NOT NULL, \`recordedDate\` datetime NOT NULL, \`personId\` int NULL, \`roomId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_c28e52f758e7bbc53828db92194\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`room_record\` ADD CONSTRAINT \`FK_c195fad8291950002d17601a454\` FOREIGN KEY (\`roomId\`) REFERENCES \`room\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`person\` ADD CONSTRAINT \`FK_8c252b7bfff409f0c040c8ac8d9\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`person_record\` ADD CONSTRAINT \`FK_bf3449cc5660f726ea43d6f3854\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`person_record\` ADD CONSTRAINT \`FK_e36b62ec41785441bbee2d7dce9\` FOREIGN KEY (\`roomId\`) REFERENCES \`room\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`person_record\` DROP FOREIGN KEY \`FK_e36b62ec41785441bbee2d7dce9\``
    );
    await queryRunner.query(
      `ALTER TABLE \`person_record\` DROP FOREIGN KEY \`FK_bf3449cc5660f726ea43d6f3854\``
    );
    await queryRunner.query(
      `ALTER TABLE \`person\` DROP FOREIGN KEY \`FK_8c252b7bfff409f0c040c8ac8d9\``
    );
    await queryRunner.query(
      `ALTER TABLE \`room_record\` DROP FOREIGN KEY \`FK_c195fad8291950002d17601a454\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_c28e52f758e7bbc53828db92194\``
    );
    await queryRunner.query(`DROP TABLE \`person_record\``);
    await queryRunner.query(`DROP TABLE \`person\``);
    await queryRunner.query(`DROP TABLE \`room\``);
    await queryRunner.query(`DROP TABLE \`room_record\``);
    await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(`DROP INDEX \`IDX_ae4578dcaed5adff96595e6166\` ON \`role\``);
    await queryRunner.query(`DROP TABLE \`role\``);
  }
}
