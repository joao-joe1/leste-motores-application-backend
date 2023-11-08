import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductsService {
    constructor(private readonly prismaService: PrismaService) { }

    async listProducts() {
        const listProducts = await this.prismaService.product.findMany()
        return listProducts
    }

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
}
