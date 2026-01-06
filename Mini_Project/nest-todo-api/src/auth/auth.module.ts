import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports:[
    PassportModule,
    JwtModule.register({
      secret:'JWT_SECRET',
      signOptions:{expiresIn:'1h'}
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService,JwtStrategy],
  exports:[JwtModule,AuthService]

})
export class AuthModule {}
