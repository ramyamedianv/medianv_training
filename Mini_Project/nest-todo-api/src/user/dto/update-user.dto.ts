import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {

  @ApiPropertyOptional({
    description: 'First name of the user',
    example: 'Ramya'
  })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiPropertyOptional({
    description: 'Last name of the user',
    example: 'Sunarkani'
  })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiPropertyOptional({
    description: 'Email address of the user',
    example: 'ramya@gmail.com'
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    description: 'Password (minimum 6 characters)',
    example: 'newPassword123',
    minLength: 6
  })
  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;
}
