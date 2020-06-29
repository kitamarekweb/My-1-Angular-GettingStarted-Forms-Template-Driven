import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { CustomerReactiveComponent } from './customersReactive/customer-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
