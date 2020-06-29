import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from "@angular/forms";

import {Customer} from './customer';

@Component({
  selector: 'app-customer-reactive',
  templateUrl: './customer-reactive.component.html',
  styleUrls: ['./customer-reactive.component.css']
})
export class CustomerReactiveComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();
  email = new FormControl();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: '',
      lastName: {value: 'Brown', disabled: false},
      email: [''],
      sendCatalog: [{value: true, disabled: true}]
    })
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  populateTestDataSetValue(): void {
    this.customerForm.setValue({
      firstName: 'Jack',
      lastName: 'Harkness',
      email: 'jack@torchwood.com',
      sendCatalog: false
    })
  }
  populateTestDataPatchValue(): void {
    this.customerForm.patchValue({
      lastName: 'Smith'
    })
  }
}
