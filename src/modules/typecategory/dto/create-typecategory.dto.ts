import { IsNotEmpty, IsString } from "class-validator"

export class CreateTypeCategoryDto {
    @IsNotEmpty({ message: 'TypeNameNotProvidedError' })
    @IsString({ message: 'InvalidTypeNameError' })
    typeCategoryName: string

    @IsNotEmpty({ message: 'CategoryIdNotProvidedError' })
    @IsString({ message: 'InvalidCategoryError' })
    categoryName: string
}
