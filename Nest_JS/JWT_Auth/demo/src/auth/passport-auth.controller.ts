import { Controller, Get, HttpCode, HttpStatus, NotImplementedException, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportLocalGuard } from "src/guard/auth/passport-local.guard";
import { PassportJwtAuthlGuard } from "src/guard/auth/passport-jwt.guard";


@Controller('auth-v2')
export class passportAuthController{
    constructor(private authService:AuthService){};
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @UseGuards(PassportLocalGuard)
    login(@Request() req){
        return this.authService.signIn(req.user);
    }

    @Get('me')
    @UseGuards(PassportJwtAuthlGuard)
    getUserInfo(@Request() req){
        return req.user;
    }

}