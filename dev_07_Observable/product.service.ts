/**
 * Created by user1 on 04.05.2016.
 */

import {Injectable} from 'angular2/core';
import {Product} from "./Product";
import {PRODUCTS} from "./mock-products";
import {Observable} from "rxjs/Rx";
import {Http, Response} from "angular2/http";


@Injectable()

export class ProductService{
    public products:Product[] = PRODUCTS;

    constructor(private http:Http){

    }

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

    getProductObservable():Observable{
        return this.http.get("app/daten.json")
            .map(this.handleData)
    }

    handleData(res:Response){
        console.log(res);

        if(res.status < 200 || res.status >=300)
        {
            //Error
            //throw new Error("Nix Daten" + res.status);
            debugger;

            //throw( new Error( "Nix Daten" + res.status ) );
        }

        else{
            //console.log(res.json());
            let body = res.json();
            return body.data || {};

        }


    }

}

