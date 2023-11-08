import { IsNotEmpty, IsString, IsNumber, IsUrl } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({ message: "CategoryNotProvidedError" })
    @IsString({ message: "InvalidCategoryTypeError" })
    category: string

<<<<<<< HEAD
    @IsNotEmpty({ message: "CategoryImageNotProvidedError" })
=======
    @IsNotEmpty({ message: "CategoryNotProvidedError" })
>>>>>>> 6f3bd36de7d9340f46da1b439aa4362ed59ded2c
    @IsString({ message: "InvalidCategoryTypeError" })
    image_url: string
}