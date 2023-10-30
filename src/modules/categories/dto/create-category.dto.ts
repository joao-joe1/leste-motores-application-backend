import { IsNotEmpty, IsString, IsNumber, IsUrl } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({ message: "CategoryNotProvidedError" })
    @IsString({ message: "InvalidCategoryTypeError" })
    category: string

    @IsNotEmpty({ message: "CategoryNotProvidedError" })
    @IsString({ message: "InvalidCategoryTypeError" })
    image_url: string
}