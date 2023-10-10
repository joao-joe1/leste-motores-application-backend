import { Module } from '@nestjs/common';
import { PrismaModule } from './infra/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { GuardModule } from './guards/guards.module';
import { TypeCategoryModule } from './modules/typecategory/typecategory.module';

@Module({
  imports: [PrismaModule, AuthModule, ProductsModule, CategoriesModule, GuardModule, TypeCategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
