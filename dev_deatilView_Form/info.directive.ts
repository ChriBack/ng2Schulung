/**
 * Created by user1 on 03.05.2016.
 */

import {Directive, ElementRef,Input,OnInit} from 'angular2/core';

@Directive({
    selector:'[myinfo]'
})

export class InfoDirective implements OnInit{

    @Input('myinfo') textelement: string;

    constructor(private el:ElementRef){

    };

    ngOnInit(){
        console.log(this.el);
        this.el.nativeElement.innerHTML ="Text ausgetauscht" + ' ' + this.textelement;
    }


}