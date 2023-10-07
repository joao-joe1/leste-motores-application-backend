import { Controller, Post, UsePipes, ValidationPipe, Body } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma/prisma.service";
import { LoginDTO } from "./dto/loginDTO.dto";
import { AuthService } from "./auth.service";

@Controller('/auth')
export class AuthController {
  constructor(private readonly prismaService: PrismaService, private readonly authService: AuthService) { }

  @Post('/login/lestemotores')
  @UsePipes(new ValidationPipe({ transform: true }))
  async login(@Body() body: LoginDTO) {
    const validation = await this.authService.login(body)

    console.log('test')
  }
}