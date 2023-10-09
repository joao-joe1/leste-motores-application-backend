import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({ message: "CategoryNotProvidedError" })
    @IsString({ message: "InvalidCategoryTypeError" })
    category: string
}