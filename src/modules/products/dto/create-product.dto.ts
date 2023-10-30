import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    image_url: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    about: string;

    @IsString()
    @IsNotEmpty()
    information: string;

    @IsString()
    @IsNotEmpty()
    category: string; // Nome da categoria

    @IsString()
    @IsNotEmpty()
    type: string; // Nome do tipo de categoria
}
