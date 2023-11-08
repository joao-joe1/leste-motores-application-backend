/*
  Warnings:

  - You are about to drop the `products_types` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_typeId_fkey";

-- DropForeignKey
ALTER TABLE "products_types" DROP CONSTRAINT "products_types_categoryId_fkey";

-- DropTable
DROP TABLE "products_types";

-- CreateTable
CREATE TABLE "categories_types" (
    "id" SERIAL NOT NULL,
    "typeName" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "categories_types_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "categories_types" ADD CONSTRAINT "categories_types_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "categories_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
