import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminCheckGuard } from 'src/guards/admin-check.guard';
@Controller('categories')
export class CategoriesController {
  @Get()
  @UseGuards(AdminCheckGuard)
  async test() {
    return { message: 'test' }
  }
}
