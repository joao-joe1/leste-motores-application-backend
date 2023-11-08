import { Body, Controller, Delete, Get, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminCheckGuard } from 'src/guards/admin-check.guard';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoriesService } from './categories.service';
import { updateCategoryDTO } from './dto/updateCategory.dto';

@Controller('/categories')
export class CategoriesController {
  constructor(private readonly prismaService: PrismaService, private readonly categoriesService: CategoriesService) { }

  @Get('/list')
  async getCategories() {
    const getCategories = await this.categoriesService.findCategories();
    return getCategories
  }

  @Post('/create')
  @UseGuards(AdminCheckGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async createCategories(@Body() body: CreateCategoryDto) {
    const createCategory = await this.categoriesService.createCategory(body)
    return createCategory
  }

  @Delete('/delete')
  @UseGuards(AdminCheckGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async deleteCategory(@Body() body: CreateCategoryDto) {
    const deleteCategory = await this.categoriesService.deleteCategory(body)
    return deleteCategory
  }

  @Put('/update')
  @UseGuards(AdminCheckGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateCategory(@Body() body: updateCategoryDTO) {
    const updateCategory = await this.categoriesService.updateCategory(body)
    return updateCategory
  }
}
