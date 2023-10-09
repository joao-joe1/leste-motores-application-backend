import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypecategoryService } from './typecategory.service';

@Controller('typecategory')
export class TypecategoryController {
  constructor(private readonly typecategoryService: TypecategoryService) { }
}
