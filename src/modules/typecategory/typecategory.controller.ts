import { Controller, Get, Post, Body, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { TypecategoryService } from './typecategory.service';
import { CreateTypeCategoryDto } from './dto/create-typecategory.dto';
import { AdminCheckGuard } from 'src/guards/admin-check.guard';

@Controller('/typecategory')
export class TypecategoryController {
  constructor(private readonly typecategoryService: TypecategoryService) { }

<<<<<<< HEAD
  @Get('/list')
  async listTypeCategory() {
    const listTypeCategory = await this.typecategoryService.listCategoryType()
    return { listTypeCategory }
  }

=======
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c
  @Post('/create')
  @UseGuards(AdminCheckGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async createTypeCategory(@Body() body: CreateTypeCategoryDto) {
    const createTypeCategory = await this.typecategoryService.createCategoryType(body)
    return { createTypeCategory }
  }
}
