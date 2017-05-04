/**
 * Created by user1 on 04.05.2016.
 */

import {Injectable} from 'angular2/core';
import {Product} from "./Product";
import {PRODUCTS} from "./mock-products";

@Injectable()

export class ProductService{
    public products:Product[] = PRODUCTS;


    getInfo(){
        return "Ich bin ein Berliner";
    }
    getProducts(){
        return this.products;
    }

    getProductsSync(){
        return PRODUCTS;
    }

    getProductsAsync(){
        return Promise.resolve(PRODUCTS);
    }
}

