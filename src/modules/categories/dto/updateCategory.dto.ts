import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class updateCategoryDTO {
    @IsNotEmpty({ message: "CategoryNewNameNotProvidedError" })
    @IsString()
    newNameCategory: string

    @IsNotEmpty({ message: "CategoryNotProvidedError" })
    @IsString()
    category: string

    @IsNotEmpty({ message: "CategoryImageNotProvidedError" })
    @IsString()
    image_url: string
}