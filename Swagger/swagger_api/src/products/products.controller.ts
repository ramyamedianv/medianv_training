import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto, CreateProductRespDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
@ApiTags('product section')
@Controller('products')
export class ProductsController {
    constructor(private readonly productService:ProductsService){};

    @ApiOperation({summary:"Used To Get All Products"})
    @ApiResponse({ status: 200, description: 'Products fetched successfully' })
    @Get()
    FetchAllProducts(){
        return this.productService.findAll()
    }

    @ApiOperation({ summary: 'Get product by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'Product ID' })
    @ApiResponse({ status: 200, description: 'Product fetched successfully' })
    @ApiResponse({ status: 404, description: 'Product not found' })
    @Get(':id')
    FindProductById(@Param('id') id:string){
    return this.productService.findOne(Number(id));
    }

    @ApiOperation({summary:"used To create prodcuct"})
    @ApiCreatedResponse({description:'Product Created',type:CreateProductRespDto})
    @ApiBadRequestResponse({description:'bad Payload sent'})
    @Post()
    AddProduct(@Body() data:CreateProductDto){
    return this.productService.create(data);
    }

    @ApiOperation({summary:"used To update prodcuct"})
    @ApiParam({name: 'id',description: 'Product ID',example: 1})
    @ApiResponse({status: 200,description: 'Product updated successfully',})
    @ApiResponse({status: 404,description: 'Product not found',})
    @ApiResponse({status: 400,description: 'No fields provided to update'})
    @Patch(':id')
    UpdateProduct(@Param('id') id:string,@Body() data:UpdateProductDto){
    return this.productService.patch(Number(id),data);
    }

    @ApiOperation({ summary: 'Delete product by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'Product ID' })
    @ApiResponse({ status: 200, description: 'Product deleted successfully' })
    @ApiResponse({ status: 404, description: 'Product not found' })
    @Delete(':id')
    DeleteProduct(@Param('id') id:string){
    return this.productService.remove(Number(id));
    }
}
