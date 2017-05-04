import {Component} from 'angular2/core';
import {Product} from './Product';

@Component({
    selector: 'my-listing',
    template: `
        <h1>Angular Beispiel</h1>        
        <h2>{{input}} !</h2>
        <input class="form-control" [(ngModel)]="input" (keypress)="changeName(input)" placeholder="Text Hier !">
        <br/>
        <button class="btn btn-primary" (click)="clicked($event)">Click</button>
        <br/>
        <select [(ngModel)]="order.type" class="form-control" #t (change)="callType(t.value)">
         <option *ngFor="#type of list" [value]="type">{{type}}</option>
        </select>
        <br/>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="#item of list; #i = index">
             <span class="badge">{{i}}</span> {{item}}
            </li>
        </ul>
        <article *ngFor="#product of products">
            <header><h2>{{product.title}}</h2></header>
            <small>{{product.pnr}}</small>
            <p>{{product.price}} <span class="glyphicon glyphicon-euro" aria-hidden="true"></span></p>
            <button class="btn btn-default"(click)="selectProduct(product)" >Select Product</button>
            
            <div *ngIf="product == selectedProduct">
                <input [(ngModel)]="product.title">
            </div>
            
            
        </article>
         <br/>
        
        <pre>{{products|json}}</pre>
    `,
})


export class ProductlistingComponent {

    public product:string = "Fahrrad";
    public list:Array<string> = ["Blub", "Bla", "Bli", "Wurst", "Wasser"];
    public input:string = "";
    public products:Product[] = PRODUCTS;
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
}


var PRODUCTS:Product[] = [
    {
        pnr: "a6w51daw6d15aw16d5a1wd",
        title: "Nutellabrot",
        price: 17.15
    },
    {
        pnr: "51bd1srsw981b98srdb",
        title: "Käsebrot",
        price: 19.15
    },
    {
        pnr: "se19189t8m1tgu1t81",
        title: "Wurstbrot",
        price: 18.35
    }
]