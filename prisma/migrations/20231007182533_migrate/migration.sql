/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `administrators` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "administrators" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "administrators_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "administrators_id_key" ON "administrators"("id");
