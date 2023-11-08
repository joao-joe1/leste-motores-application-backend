import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateTypeCategoryDto } from './dto/create-typecategory.dto';

@Injectable()
export class TypecategoryService {
    constructor(private readonly prismaService: PrismaService) { }

    async createCategoryType(body: CreateTypeCategoryDto) {
        const categoryExists = await this.prismaService.category.findFirst({
            where: { category: body.categoryName }
        })

        if (!categoryExists) { throw new ConflictException('Category dont exists!') }

        const categoryTypeExists = await this.prismaService.categoryType.findFirst({
            where: { typeName: body.typeCategoryName }
        })

        if (categoryTypeExists) { throw new ConflictException('Category type was already exists!') }

        const createCategoryType = await this.prismaService.categoryType.create({
            data: {
                typeName: body.typeCategoryName,
                category: {
                    connect: { id: categoryExists.id }
                }
            }
        });

        return { message: 'Category type created!', createCategoryType };
    }
<<<<<<< HEAD

    async listCategoryType() {
        const listCategoryType = await this.prismaService.categoryType.findMany({
            include: { products: true }
        })
        return listCategoryType
    }

    async deleteCategoryType() {

    }
=======
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c
}
