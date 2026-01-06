import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  generateToken(user: any) {
    const payload = {
      id: user.id,
      email: user.email,
    };

    return this.jwtService.sign(payload);
  }
}
