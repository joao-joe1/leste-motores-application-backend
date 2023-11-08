import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { LoginDTO } from './dto/loginDTO.dto';
// import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) { }
  async login(body: LoginDTO) {
    const validationAuth = await this.prismaService.admin.findUnique({ where: { name: body.name } })
    if (!validationAuth) { throw new ConflictException('Incorrect Credentials!') }

    // const validationPassword = await compare(body.password, validationAuth.password)
    // if (!validationPassword) { throw new ConflictException('Incorrect Credentials') }

    const token = sign({ name: validationAuth.name }, JWT_SECRET, {
      subject: validationAuth.id.toString(),
      expiresIn: '1d'
    })

    return token
  }
}
