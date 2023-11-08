<<<<<<< HEAD
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
=======
import { Injectable, NotFoundException } from "@nestjs/common";
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c
import { PrismaService } from "src/infra/prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductsService {
    constructor(private readonly prismaService: PrismaService) { }

<<<<<<< HEAD
    async listProducts() {
        const listProducts = await this.prismaService.product.findMany()
        return listProducts
    }

=======
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c
    async createProduct(createProductDto: CreateProductDto) {
        const { category, type, ...productData } = createProductDto;

        const categoryRecord = await this.prismaService.category.findFirst({
            where: { category: category },
        });

        if (!categoryRecord) { throw new NotFoundException("Category not found"); }

        const typeRecord = await this.prismaService.categoryType.findFirst({
            where: { typeName: type },
        });

        if (!typeRecord) { throw new NotFoundException("Category type not found"); }

        const createProduct = await this.prismaService.product.create({
            data: {
                ...productData,
                categoryId: categoryRecord.id,
                typeId: typeRecord.id,
            }
        });

        return createProduct;
    }

<<<<<<< HEAD
    async deleteProduct(body: CreateProductDto) {
        const { name } = body

        const productRecord = await this.prismaService.product.findFirst({
            where: { name: name }
        })

        if (!productRecord) { throw new ConflictException('Product not found!') }

        const deleteProduct = await this.prismaService.product.delete({
            where: { id: productRecord.id }
        })

        return deleteProduct
    }
=======
    // async deleteProduct(body: CreateProductDto) {
    //     const { name } = body

    //     const deleteProduct = await this.prismaService.product.findFirst({
    //         where: { name: name }
    //     })

    //     if(!deleteProduct)
    // }
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c
}
