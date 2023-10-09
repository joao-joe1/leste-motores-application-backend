import { Body, Controller, Delete, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminCheckGuard } from 'src/guards/admin-check.guard';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoriesService } from './categories.service';

@Controller('/categories')
export class CategoriesController {
  constructor(private readonly prismaService: PrismaService, private readonly categoriesService: CategoriesService) { }

  @Post('/create')
  @UseGuards(AdminCheckGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async createCategories(@Body() body: CreateCategoryDto) {
    const createCategory = await this.categoriesService.createCategory(body)
    return { createCategory }
  }

  @Delete('/delete')
  @UseGuards(AdminCheckGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async deleteCategory(@Body() body: CreateCategoryDto) {
    const deleteCategory = await this.categoriesService.deleteCategory(body)
    return { deleteCategory }
  }
}
