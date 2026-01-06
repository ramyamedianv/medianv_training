import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'ramya' })
  firstName: string;

  @ApiProperty({ example: 'sunarkani' })
  lastName: string;

  @ApiProperty({ example: 'ramya@gmail.com' })
  email: string;
}

export class LoginResponseDto {
  @ApiProperty({ example: 'jwt-token-here' })
  token: string;

  @ApiProperty({ type: UserResponseDto })
  user: UserResponseDto;
}

export class LoginSuccessResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'Login successful' })
  message: string;

  @ApiProperty({ type: LoginResponseDto })
  data: LoginResponseDto;
}

export class UserSuccessResponseDto {
  @ApiProperty({ example: 201 })
  statusCode: number;

  @ApiProperty({ example: 'User registered successfully' })
  message: string;

  @ApiProperty({ type: UserResponseDto })
  data: UserResponseDto;
}

export class UserProfilResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'User Profile data fetched successfully' })
  message: string;

  @ApiProperty({ type: UserResponseDto })
  data: UserResponseDto;
}

export class UpdateUserProfilResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'User Profile Data Updated successfully' })
  message: string;

  @ApiProperty({ type: UserResponseDto })
  data: UserResponseDto;
}
