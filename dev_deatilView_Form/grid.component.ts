/**
 * Created by user1 on 03.05.2016.
 */

import {Component,Input,ViewEncapsulation} from 'angular2/core';

@Component({
    selector:'my-grid',
    template:`
        <table class="table">
            <tr *ngFor="#element of mygriddata; #i = index; #odd=odd; #even=even;" 
            [ngClass]="{ odd: odd, even: even }" (click)="showMeData(element)">            
            <td>{{element.town}}</td>
            <td>{{element.amount | currency}}</td>
            </tr>  
        </table>
        
        <!--{{mygriddata | json}}-->
        `,
    style:``,
    encapsulation: ViewEncapsulation.None
})

export class GridComponent{
    @Input() mygriddata: any[];

    public showMeData(el){
        console.log(el);
    }
}