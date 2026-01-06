import {Controller, Get, Post, Body,Patch,Param,ParseIntPipe,UseGuards,Req,HttpCode,HttpException,ForbiddenException,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { STATUS_CODES } from 'src/common/constants/status-codes';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';

import {
  UserSuccessResponseDto,
  LoginSuccessResponseDto,
  UserProfilResponseDto,
  UpdateUserProfilResponseDto,
} from './dto/user-response.dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  @HttpCode(STATUS_CODES.CREATED)
  @ApiOperation({ summary: 'Register new user' })
  @ApiResponse({
    status: 201,
    description: 'User registered successfully',
    type: UserSuccessResponseDto,
  })
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.signup(createUserDto);

      return {
        statusCode: STATUS_CODES.CREATED,
        message: 'User registered successfully',
        data: user,
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Signup failed',
        error.status || STATUS_CODES.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('login')
  @HttpCode(STATUS_CODES.OK)
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({
    status: 200,
    description: 'Login successful',
    type: LoginSuccessResponseDto,
  })
  async login(@Body() loginDto: LoginDto) {
    try {
      const { email, password } = loginDto;

      const user = await this.userService.login(email, password);
      const token = await this.authService.generateToken(user);

      return {
        statusCode: STATUS_CODES.OK,
        message: 'Login successful',
        data: {
          token,
          user,
        },
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Login failed',
        error.status || STATUS_CODES.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  @HttpCode(STATUS_CODES.OK)
  @ApiOperation({ summary: 'Get logged-in user profile' })
  @ApiResponse({
    status: 200,
    description: 'User profile fetched successfully',
    type: UserProfilResponseDto,
  })
  async getUserProfileData(@Req() req) {
    try {
      const user = await this.userService.getProfile(req.user.id);

      return {
        statusCode: STATUS_CODES.OK,
        message: 'User Profile data fetched successfully',
        data: user,
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to fetch user',
        error.status || STATUS_CODES.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Patch(':id')
  @HttpCode(STATUS_CODES.OK)
  @ApiOperation({ summary: 'Update own user profile' })
  @ApiResponse({
    status: 200,
    description: 'User profile updated successfully',
    type: UpdateUserProfilResponseDto,
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
    @Req() req,
  ) {
    try {
      if (req.user.id !== id) {
        throw new ForbiddenException(
          'You are not allowed to update another user',
        );
      }

      const updatedUser = await this.userService.updateProfile(
        id,
        req.user.id,
        updateUserDto,
      );

      return {
        statusCode: STATUS_CODES.OK,
        message: 'User Profile Data Updated successfully',
        data: updatedUser,
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to update user',
        error.status || STATUS_CODES.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
