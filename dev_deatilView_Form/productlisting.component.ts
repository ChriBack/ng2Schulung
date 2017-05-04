import {Component, OnInit} from 'angular2/core';
import {Product} from './Product';
import {ProductService} from './product.service';

import {HTTP_PROVIDERS} from 'angular2/http';

import  {ProductDetailComponent} from './productdetail.component';

import {Router, RouteParams} from 'angular2/router';

@Component({
    template: `         
        <h2>Produktübersicht</h2>                
        <my-product-detail [myproduct]="selectedProduct"></my-product-detail>
        
        <article *ngFor="#product of products">
            <header><h2>{{product.title}}</h2></header>
            <small>{{product.pnr}}</small>
            <p>{{product.price}} <span class="glyphicon glyphicon-euro" aria-hidden="true"></span></p>
            <button class="btn btn-default"(click)="selectProduct(product)" >Select Product</button>
            <button class="btn btn-default"(click)="selectProductnewPage(product)" >Produkt auf einer neuen Seite bearbeiten</button>
        </article>   
       <hr>
       
       <h3>Service Info</h3>
       <p>{{serviceInfo}}</p>
           
    `,
    directives:[ProductDetailComponent],
    providers:[ProductService,HTTP_PROVIDERS]
})


export class ProductlistingComponent implements OnInit{
    // <editor-fold desc="Alter Kram">
        public product:string = "Fahrrad";
        public list:Array<string> = ["Blub", "Bla", "Bli", "Wurst", "Wasser"];
        public input:string = "";
        public products:Product[];
        public order = {
            type: 'Wurst'
        };
        public callType(value){
            console.log(value);
            this.order.type=value;
        };
        public changeName(input) {
            console.log(input)
        };
        clicked(event) {
            console.log(event)
            event.preventDefault();
        };
        public selectedProduct:Product;
        public selectProduct(p){
            this.selectedProduct = p;
            console.log(this.selectedProduct);
        };
    // </editor-fold>

    // <editor-fold desc="Service">
    public serviceInfo:string;

    private getData(){
        this.products = this._productService.getProductsSync();
    }

    private onFail (){
        console.log("Error");
    }

    //VARIANTE 1
    private getDataAsync(){
        var that = this;
        this._productService.getProductsAsync().then(function(p){
            //Success
            console.log(p);
            that.products = p;

        },function(){
            //Error
            console.log("Error");
        })
    };
    //VARIANTE 2
    private getDataAsyncV(){
        var that = this;
        this._productService.getProductsAsync().then(p => this.products = p,function(){
            //Error
            console.log("Error");
        })
    }

    //VARIANTE 3 OBSERVABLE
    private getDataObservable(){
        this._productService.getProductObservable()
            .subscribe((p)=>{
                this.products = p;
            });
    } 
    // </editor-fold>


    ngOnInit():any{
        //this.getData();
        //this.getDataAsync();
        //this.getDataAsyncV();
        this.getDataObservable();
    }

    constructor(private _productService: ProductService, private router: Router){

        this.serviceInfo = _productService.getInfo();
        //this.products = _productService.getProducts();

        //console.log(this.products);
    }
    
    private selectProductnewPage(product:Product){

        this.router.navigate(['Detail',{id:product.pnr}]);
        
        console.log(product);

    }

}