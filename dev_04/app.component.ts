import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {ProductlistingComponent} from './productlisting.component';
import {DirectivesComponent} from './directives.component';
import {AttributesComponent} from './attribute.component';


@Component({
    selector: 'my-app',
    template: `
        <h1>Angular Beispiel</h1> 
        
        <div class="btn-group btn-group-justified" role="group" 
        aria-label="Justified button group"> 
        <a [routerLink]="['Products']" class="btn btn-default" role="button">Produktübersicht</a> 
        <a [routerLink]="['Directives']" class="btn btn-default" role="button">Directiven</a> 
        <a [routerLink]="['Attributes']" class="btn btn-default" role="button">Attributes</a> 
        </div>
        <!--<nav>
            <ul>
                <li>
                   <a [routerLink]="['Products']">Produktübersicht</a>
                </li>
                <li>
                    <a [routerLink]="['Directives']">Beispiel zu den Directiven</a>  
                </li>
                <li>
                    <a [routerLink]="['Attributes']">Beispiel zu den Attributes</a>
                </li>
            </ul>
        </nav>-->           
        
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
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
    },
    {
        path: '/attributes',
        name: 'Attributes',
        component: AttributesComponent
    }
])

export class AppComponent {


}

