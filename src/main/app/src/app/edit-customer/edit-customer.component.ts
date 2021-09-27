import { CustomerService } from './../service/customer-service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  submitted = false;
  id: number;
  
  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.customerService.getCustomersById(this.id).subscribe(customer => {
      this.customer = customer;
      console.log(this.customer);
    });
  }
   update() {
    this.submitted = false;
    this.customerService.updateCustomer(this.customer.id, this.customer).subscribe(customer => {
      this.customer = customer;
      this.router.navigate(['/customer']);
    }, error => console.log(error));   
   }
}
