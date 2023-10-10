import { Module } from '@nestjs/common';
import { TypecategoryService } from './typecategory.service';
import { TypecategoryController } from './typecategory.controller';

@Module({
  controllers: [TypecategoryController],
  providers: [TypecategoryService],
})
export class TypeCategoryModule { }
