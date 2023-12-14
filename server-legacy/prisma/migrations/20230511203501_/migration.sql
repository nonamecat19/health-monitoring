-- CreateTable
CREATE TABLE "fingerprint" (
    "id_fingerprint" SERIAL NOT NULL,
    "id_person" INTEGER,
    "fingerprint_data" BYTEA NOT NULL,

    CONSTRAINT "fingerprint_pkey" PRIMARY KEY ("id_fingerprint")
);

-- CreateTable
CREATE TABLE "person" (
    "id_person" SERIAL NOT NULL,
    "name_person" VARCHAR(150) NOT NULL,
    "study_group" VARCHAR(150),
    "role_person" VARCHAR(150) NOT NULL,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id_person")
);

-- CreateTable
CREATE TABLE "person_records" (
    "id_person_records" SERIAL NOT NULL,
    "id_person" INTEGER,
    "room_number" VARCHAR,
    "oxygen" DECIMAL NOT NULL,
    "heart_rate" DECIMAL NOT NULL,
    "temperature" DECIMAL NOT NULL,
    "is_critical_results" BOOLEAN NOT NULL,
    "recorded_time" TIME(6) NOT NULL,
    "recorded_date" DATE NOT NULL,

    CONSTRAINT "person_records_pkey" PRIMARY KEY ("id_person_records")
);

-- CreateTable
CREATE TABLE "room" (
    "room_number" VARCHAR(150) NOT NULL,
    "room_type" VARCHAR(150),

    CONSTRAINT "room_pkey" PRIMARY KEY ("room_number")
);

-- CreateTable
CREATE TABLE "room_records" (
    "id_room_records" SERIAL NOT NULL,
    "room_number" VARCHAR,
    "humidity" DECIMAL NOT NULL,
    "temperature" DECIMAL NOT NULL,
    "pressure" DECIMAL NOT NULL,
    "carbon_dioxide" DECIMAL NOT NULL,
    "air_ions" DECIMAL NOT NULL,
    "ozone" DECIMAL NOT NULL,
    "is_critical_results" BOOLEAN NOT NULL,
    "recorded_time" TIME(6) NOT NULL,
    "recorded_date" DATE NOT NULL,

    CONSTRAINT "room_records_pkey" PRIMARY KEY ("id_room_records")
);

-- CreateTable
CREATE TABLE "admin" (
    "id_admin" SERIAL NOT NULL,
    "email" VARCHAR(150) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id_admin")
);

-- AddForeignKey
ALTER TABLE "fingerprint" ADD CONSTRAINT "fingerprint_id_person_fkey" FOREIGN KEY ("id_person") REFERENCES "person"("id_person") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "person_records" ADD CONSTRAINT "person_records_id_person_fkey" FOREIGN KEY ("id_person") REFERENCES "person"("id_person") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "person_records" ADD CONSTRAINT "person_records_room_number_fkey" FOREIGN KEY ("room_number") REFERENCES "room"("room_number") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "room_records" ADD CONSTRAINT "room_records_room_number_fkey" FOREIGN KEY ("room_number") REFERENCES "room"("room_number") ON DELETE NO ACTION ON UPDATE NO ACTION;
