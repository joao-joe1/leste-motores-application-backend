import { Body, ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { LoginDTO } from './dto/loginDTO.dto';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) { }
  async login(@Body() body: LoginDTO) {
    const validationAuth = await this.prismaService.admin.findUnique({ where: { name: LoginDTO.name } })
    if (!validationAuth) { throw new ConflictException('Invalid Credentials') }

    const validationPassword = await compare(body.password, validationAuth.password)
    if (!validationPassword) { throw new ConflictException('Invalid Credentials') }

    const token = sign({ name: validationAuth.name }, JWT_SECRET, {
      subject: validationAuth.id,
      expiresIn: '1d'
    })

    return { message: 'Sucess!', token }

  }
}
