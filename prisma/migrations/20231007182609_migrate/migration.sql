/*
  Warnings:

  - The primary key for the `administrators` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "administrators" DROP CONSTRAINT "administrators_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "administrators_pkey" PRIMARY KEY ("id");
