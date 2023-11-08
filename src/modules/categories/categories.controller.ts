<<<<<<< HEAD
import { Body, Controller, Delete, Get, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
=======
import { Body, Controller, Delete, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c
import { AdminCheckGuard } from 'src/guards/admin-check.guard';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoriesService } from './categories.service';
<<<<<<< HEAD
import { updateCategoryDTO } from './dto/updateCategory.dto';
=======
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c

@Controller('/categories')
export class CategoriesController {
  constructor(private readonly prismaService: PrismaService, private readonly categoriesService: CategoriesService) { }

  @Get('/list')
  async getCategories() {
    const getCategories = await this.categoriesService.findCategories();
<<<<<<< HEAD
    return getCategories
=======
    return { getCategories }
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c
  }

  @Post('/create')
  @UseGuards(AdminCheckGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async createCategories(@Body() body: CreateCategoryDto) {
    const createCategory = await this.categoriesService.createCategory(body)
<<<<<<< HEAD
    return createCategory
=======
    return { createCategory }
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c
  }

  @Delete('/delete')
  @UseGuards(AdminCheckGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async deleteCategory(@Body() body: CreateCategoryDto) {
    const deleteCategory = await this.categoriesService.deleteCategory(body)
<<<<<<< HEAD
    return deleteCategory
  }

  @Put('/update')
  @UseGuards(AdminCheckGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateCategory(@Body() body: updateCategoryDTO) {
    const updateCategory = await this.categoriesService.updateCategory(body)
    return updateCategory
=======
    return { deleteCategory }
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c
  }
}
