import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'
import { CarComponent } from './car.component';
import { ProductListComponent } from './products/product.component';
import { OrderListComponent } from './orders/order.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    CarComponent,
    ProductListComponent,
    OrderListComponent
  ],
  bootstrap: [ AppComponent ],
  providers:[]
})
export class AppModule { }
