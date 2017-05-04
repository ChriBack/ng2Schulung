import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS } from 'angular2/router';
import {ProductlistingComponent} from './productlisting.component';
import {DirectivesComponent} from './directives.component';


@Component({
    selector: 'my-app',
    template: `
        <h1>Angular Beispiel</h1> 
        <router-outlet></router-outlet>  
        <a [routerLink]="['Products']">Produktübersicht</a>   
        <a [routerLink]="['Directives']">Beispiel zu den Directiven</a>     
                  
    `,
    directives:[ROUTER_DIRECTIVES],
    providers: ROUTER_PROVIDERS
})

@RouteConfig([
    {
        path: '/products',
        name: 'Products',
        component: ProductlistingComponent
    },
    {
        path: '/directives',
        name: 'Directives',
        component: DirectivesComponent
    }
])

export class AppComponent {

  
}

