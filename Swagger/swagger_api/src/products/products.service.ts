import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
        private products = [
    { id: 1, name: "Mobile Phone", price: 20000 },
    { id: 2, name: "Laptop", price: 75000 },
    { id: 3, name: "Headphones", price: 2500 },
    { id: 4, name: "Smart Watch", price: 12000 },
    { id: 5, name: "Bluetooth Speaker", price: 4000 },
    ];

    findAll(){
        return this.products;
    }

    findOne(id:number){
        const index=this.products.findIndex(prod=>prod.id===id);
        if(index==-1) throw new NotFoundException('Product Not Found!!!');
        const product=this.products[index];
        return product;
    }

    create(data:{name:string,price:number}){
        if(!data) throw new BadRequestException('Please provide product data to create');
        const product={
            id:Date.now(),
            ...data
        }
        this.products.push(product);
        return {
            msg:'SuccessFully Added new product',
            product
        }
    }

    patch(id:number,data:Partial<{name:string,price:number}>){
        const old_product = this.findOne(id);

        if (Object.keys(data).length === 0) {
            throw new BadRequestException('No fields provided to update');
        }
        const product=Object.assign(old_product, data);
        return {
            message: 'Product updated successfully',
            product,
        };
    }

    remove(id:number){
        const index=this.products.findIndex(p=>p.id===id);
        if(index==-1) throw new NotFoundException('Product Not Found');
        this.products.splice(index,1);
        return {
            msg:"product deleted successfully",
        }

    }

}

