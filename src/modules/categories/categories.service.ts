import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import * as fs from 'fs';
<<<<<<< HEAD
import { updateCategoryDTO } from './dto/updateCategory.dto';
=======
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c

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

<<<<<<< HEAD
        // let imageBase64 = null;
        // if (body.image_url) {
        //     const imageBuffer = fs.readFileSync(body.image_url);
        //     imageBase64 = imageBuffer.toString('base64');
        // } -- LÓGICA PARA CONVERTER UMA IMAGEM URL EM STRING

        const createCategory = await this.prismaService.category.create({
            data: { category: body.category, image_url: body.image_url }
=======
        let imageBase64 = null;
        if (body.image_url) {
            const imageBuffer = fs.readFileSync(body.image_url);
            imageBase64 = imageBuffer.toString('base64');
        }

        const createCategory = await this.prismaService.category.create({
            data: { category: body.category, image_url: imageBase64 }
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c
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
<<<<<<< HEAD

    async updateCategory(body: updateCategoryDTO) {

        const categoryExists = await this.prismaService.category.findFirst({
            where: { category: body.category }
        })

        if (!categoryExists) { throw new NotFoundException('Category not found!') }

        const updateCategory = await this.prismaService.category.update({
            where: { id: categoryExists.id },
            data: { category: body.newNameCategory, image_url: body.image_url }
        })

        return { message: 'Category has updated!', updateCategory }
    }
=======
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c
}
