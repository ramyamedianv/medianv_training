import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStategy extends PassportStrategy(Strategy){
    

}