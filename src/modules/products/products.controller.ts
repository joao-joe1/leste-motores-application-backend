import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminCheckGuard } from "src/guards/admin-check.guard";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Controller('/products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) { }
    @Post('/create')
    @UseGuards(AdminCheckGuard)
    @UsePipes(new ValidationPipe({ transform: true }))
    async createProduct(@Body() body: CreateProductDto) {
        const createProduct = await this.productService.createProduct(body)
        return createProduct
    }
}