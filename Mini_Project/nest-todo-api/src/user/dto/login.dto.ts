import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength, minLength } from "class-validator";

export class LoginDto {

    @ApiProperty({
        example:'ramya@gmail.com',
        description:'Registered email address of the user'
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
    example: 'password123',
    description: 'User account password',
    minLength: 6,
    writeOnly: true

    })
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
}
