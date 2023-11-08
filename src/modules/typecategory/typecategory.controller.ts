import { Controller, Get, Post, Body, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { TypecategoryService } from './typecategory.service';
import { CreateTypeCategoryDto } from './dto/create-typecategory.dto';
import { AdminCheckGuard } from 'src/guards/admin-check.guard';

@Controller('/typecategory')
export class TypecategoryController {
  constructor(private readonly typecategoryService: TypecategoryService) { }

  @Get('/list')
  async listTypeCategory() {
    const listTypeCategory = await this.typecategoryService.listCategoryType()
    return { listTypeCategory }
  }

  @Post('/create')
  @UseGuards(AdminCheckGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async createTypeCategory(@Body() body: CreateTypeCategoryDto) {
    const createTypeCategory = await this.typecategoryService.createCategoryType(body)
    return { createTypeCategory }
  }
}
