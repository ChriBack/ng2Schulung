import {Component} from 'angular2/core';
import {InfoDirective} from './info.directive';

import{GridComponent} from './grid.component';

import{MyPipe} from './mypipe';

@Component({
    template: `
       <h2>Own</h2>
       <div [myinfo]="'Blub'">Lorem ipsum dolor sit.</div>
       <h3>Grid - Eigene Komponente</h3>
       <my-grid [mygriddata]="tabellenDaten"></my-grid>   
      <h3>Pipe</h3>
      {{datum|date:'dd.MM.yyyy'}}
      <h3>Eigene</h3>
      {{5|multiply:5}}
    `,
    directives: [InfoDirective, GridComponent],
    pipes:[MyPipe]
})

export class OwnComponent {
    public datum = new Date();

    public tabellenDaten:any = [
        {
            town: "Wien",
            amount: 651651561
        },
        {
            town: "Hamburg",
            amount: 32325235
        },
        {
            town: "Mailand",
            amount: 326789
        },
        {
            town: "Bonn",
            amount: 651651651
        },
        {
            town: "Köln",
            amount: 987987987
        }
    ];

    public p:Object = {
        pnr: 156,
        bez: 651651651,
        awd: "awdawdawd"
    }

}

