import {Component, OnInit, Input} from 'angular2/core';
import {Product} from './Product';
import {ProductService} from './product.service';
import {HTTP_PROVIDERS} from 'angular2/http';


@Component({
    selector:'my-product-detail',
    template: `         
        <h2>Produkt bearbeiten</h2>
        
        <form *ngIf="myproduct">
        
        <fielset>
        <legend>Edit Product</legend>
        
        <input [(ngModel)]="myproduct.title">
        
        
        </fielset>
        
        </form>
        
        
        
    `,
    providers:[ProductService,HTTP_PROVIDERS]
})


export class ProductDetailComponent implements OnInit{
    // <editor-fold desc="Service">
    ngOnInit():any{
        return undefined;
    }

    @Input() myproduct:Product;

    constructor(){

    }
    // </editor-fold>
}