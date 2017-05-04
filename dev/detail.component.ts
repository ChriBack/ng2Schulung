import {Component, OnInit, Input} from 'angular2/core';
import {Product} from './Product';
import {ProductService} from './product.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Router, RouteParams, RouteData} from 'angular2/router';

@Component({
    selector: 'my-detail',
    template: `         
        <h2>Produkt bearbeiten</h2>
         <div *ngIf="selectedProduct">     
        <form #f="ngForm" (submit)="onsubmit(f)">         
            <fielset>
                <legend>Edit Product</legend>
                <!--{{selectedProduct|json}}--> 
                    <p>Produktnummer: {{selectedProduct.pnr}}</p>
                    <p>Produktname: {{selectedProduct.title}}</p>
                    <p>Produktpreis: {{selectedProduct.price}}</p>      
            </fielset>
            
            <hr>
            <fieldset>
            <legend>Bestellung</legend>

            <label for="nachname">Nachname</label><br>       
            <input type="text" name="" id="nachname"
                ngControl="nachname"
                required
                #nachname="ngForm"><br>
            <span *ngIf="!nachname.valid">UNGÜLTIG</span>
            <br><br>
            <label for="mail">Mail</label><br>
            <input type="email" name="mail" id="mail" #mail="ngForm" ngControl="mail"><br>
            
            <label for="mail2">Confirm Mail</label><br>
            <input type="email" name="mail2" id="mail2" #mail2="ngForm" ngControl="mail2"><br>
            
            <button type="submit" [disabled]="!f.valid || (mail.value !== mail2.value)">Bestellen</button>
            </fieldset>
        </form>
      </div>
    `,
    providers: [ProductService, HTTP_PROVIDERS]
})

export class DetailComponent implements OnInit {
    pnr;
    public selectedProduct:Product;


    mailcheck;
    onsubmit(form){
        this.mailcheck = form.controls['mail2'].value;
        console.log(form.controls);
        console.log(this.mailcheck);
    }

    ngOnInit():any {
        this.pnr = this._routerParam.get("id");
        this.getDataObservable()
    }

    private getDataObservable() {
        var that = this;

        this._productService.getProductObservable()
            .subscribe(p=> {
                that.selectedProduct = p.find(function (el) {
                    return el.pnr === that.pnr
                });
            })
    }

    isAdmin:string;

    constructor(private _router:Router,
                private _routerParam:RouteParams,
                private _productService:ProductService,
                data:RouteData) {
        this.isAdmin = data.get('isAdmin');
        console.log(this.isAdmin);

    }
}