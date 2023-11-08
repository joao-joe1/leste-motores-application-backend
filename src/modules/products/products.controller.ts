<<<<<<< HEAD
import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
=======
import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c
import { AdminCheckGuard } from "src/guards/admin-check.guard";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Controller('/products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) { }
<<<<<<< HEAD

    @Get('/list')
    async listProducts() {
        const listProducts = await this.productService.listProducts()
        return { listProducts }
    }

=======
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c
    @Post('/create')
    @UseGuards(AdminCheckGuard)
    @UsePipes(new ValidationPipe({ transform: true }))
    async createProduct(@Body() body: CreateProductDto) {
        const createProduct = await this.productService.createProduct(body)
        return createProduct
    }
}