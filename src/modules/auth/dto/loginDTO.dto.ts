import { IsNotEmpty, IsString } from "class-validator";
export class LoginDTO {
    @IsString({ message: 'InvalidStringError' })
    @IsNotEmpty({ message: 'NameNotProvidedError' })
    name: string;

    @IsNotEmpty({ message: 'PasswordNotProvidedError' })
    password: string;
}