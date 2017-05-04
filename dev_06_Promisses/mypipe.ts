/**
 * Created by user1 on 03.05.2016.
 */


import {Pipe,PipeTransform} from 'angular2/core';

@Pipe({
    name:'multiply'
})

export class MyPipe implements PipeTransform{

    transform (value:number, args:any[]){
        return value * args[0];
    }

}