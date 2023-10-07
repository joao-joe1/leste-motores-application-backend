/*
  Warnings:

  - The primary key for the `administrators` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `administrators` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "administrators_id_key";

-- AlterTable
ALTER TABLE "administrators" DROP CONSTRAINT "administrators_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "administrators_pkey" PRIMARY KEY ("id");
