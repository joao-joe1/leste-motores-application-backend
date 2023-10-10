import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
    constructor(private readonly prismaService: PrismaService) { }

    async findCategories() {
        const categoriesWithTypes = await this.prismaService.category.findMany({
            include: {
                types: true
            },
        });

        return categoriesWithTypes;
    }

    async createCategory(body: CreateCategoryDto) {

        const categoryExists = await this.prismaService.category.findFirst({
            where: { category: body.category }
        })

        if (categoryExists) { throw new ConflictException('Category was already exists!') }

        const createCategory = await this.prismaService.category.create({
            data: { category: body.category }
        })

        return { message: 'Category was create!', createCategory }
    }

    async deleteCategory(body: CreateCategoryDto) {

        const categoryExists = await this.prismaService.category.findFirst({
            where: { category: body.category }
        })

        if (!categoryExists) { throw new NotFoundException('Category not found!') }

        const deleteCategory = await this.prismaService.category.delete({
            where: { id: categoryExists.id }
        })

        return { message: 'Category deleted!', deleteCategory };
    }
}
