import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from "@angular/forms"; // FormsModule is for template-driven forms

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
    ReactiveFormsModule,
    // FormsModule // FormsModule is for template-driven forms
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
