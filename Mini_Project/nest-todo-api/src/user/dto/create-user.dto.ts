import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @ApiProperty({
        description:'First name of the user',
        example:'Ramya'
    })
    @IsString()
    @IsNotEmpty()
    firstName:string;

    @ApiProperty({
        description:'Last name of the user',
        example:'Sunarkani',
        required:false
    })
    @IsString()
    lastName?:string;

    @ApiProperty({
        description:'Unique email address of the user',
        example:'ramya@gmail.com'
    })
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @ApiProperty({
    example: 'password123',
    description: 'Password must be at least 6 characters long',
    minLength: 6
  })
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password:string
    

}
