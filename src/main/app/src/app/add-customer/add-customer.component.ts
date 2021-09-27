import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomerService } from '../service/customer-service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  submitted = false;

 constructor(private customerService: CustomerService, ) { }

 ngOnInit() {
 }

 save(){
   this.customerService.createCustomer(this.customer).subscribe(customer => {
     this.customer = customer;
     this.submitted = true;
   });
   this.customer = new Customer();
  }
  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }
}
