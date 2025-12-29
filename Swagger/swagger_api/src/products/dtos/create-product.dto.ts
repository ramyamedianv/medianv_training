import { ApiProperty } from "@nestjs/swagger";


export class CreateProductDto{
    @ApiProperty({description:"Name of The Product",example:"Microwave"})
    name:string;

    @ApiProperty({description:"Price of The Product",example:15})
    price:number
}

export class CreateProductRespDto{
   @ApiProperty({description:'id of prodcuct'})
   id:number;

    @ApiProperty({description:"Name of The Product"})
    name:string;

    @ApiProperty({description:"Price of The Product"})
    price:number
}