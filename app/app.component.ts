import {Component} from '@angular/core' 

@Component({
    selector: 'mk-app',
    template: `<div><h1>This is Main Component</h1>
    <mk-product> </mk-product>
    <mk-order> </mk-order>
    </div>`
})

export class AppComponent{

}