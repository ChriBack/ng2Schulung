import {Component} from 'angular2/core';

@Component({
    template: `
       <h2>Attribute</h2>
       <h3>Style</h3>
       <div [style.color]="'green'">Lorem ipsum dolor sit amet.</div>
       <div [style.color]="'red'">Lorem ipsum dolor sit amet.</div>
       <h3>ngStyle</h3>
       <div [ngStyle]="styles">Lorem ipsum dolor sit amet, consectetur.</div>
       
       <div [ngClass]="classes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum dignissimos eaque excepturi labore laudantium obcaecati pariatur quae quam voluptatem?</div>
       
    `
})

export class AttributesComponent {
    public styles = {
        backgroundColor:"red",
        color:"white",
        padding:10
    }

    public classes = {
        info:true,
        error:true,
        teaser:true

    }


}

