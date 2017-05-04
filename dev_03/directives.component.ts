import {Component} from 'angular2/core';

@Component({
    template: `
       <h2>Directives</h2>
       <h3>Struckturelle Direktiven</h3>
       <h4>*ngIf</h4>
       <div *ngIf="isShown">Element 1</div>
       <div *ngIf="!isShown">Element 2</div>
       <div *ngIf="!isShown">Element 3</div>                   
       <button class="btn btn-default"(click)="isShown = !isShown" >Show/hide</button>
       <hr>
          
       <h4>*ngFor</h4>
       <p>index, first, last, even, odd</p>
       <ul>
            <li *ngFor="#element of [2,3,5]; #i = index; #odd=odd; #even=even;" [ngClass]="{ odd: odd, even: even }" >
            {{element}} ____ {{i}}____ {{element + i}}
            </li>
       </ul>
        <h4>*ngSwitch</h4>
        <div [ngSwitch]="auswahl">
            <p *ngSwitchWhen="15">option15</p>
            <p *ngSwitchWhen="25">option25</p>
            <p *ngSwitchDefault>Default</p>            
        </div>
        <button class="btn btn-default"(click)="auswahl = 25" >ChangeValue</button>
    `,
    styles: [`
    .even { color: #E86441; }
    .odd { color: #5fba7d; }
    `],
})

export class DirectivesComponent {
    public isShown:boolean = true;
    public auswahl:number=15;

}

