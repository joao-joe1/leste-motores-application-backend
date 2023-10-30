import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import * as fs from 'fs';

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

        let imageBase64 = null;
        if (body.image_url) {
            const imageBuffer = fs.readFileSync(body.image_url);
            imageBase64 = imageBuffer.toString('base64');
        }

        const createCategory = await this.prismaService.category.create({
            data: { category: body.category, image_url: imageBase64 }
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
