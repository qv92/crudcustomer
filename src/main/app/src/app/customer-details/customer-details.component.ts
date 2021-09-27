import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { Customer } from '../model/Customer';
import { CustomerService } from '../service/customer-service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router,
              private listCustomer: CustomerListComponent) { }

  ngOnInit() {
    
  }

  isActive(){
    this.customerService.isActive(this.customer.id, this.customer).subscribe(customer => {
          this.customer = customer;
          this.listCustomer.reloadData();
        }, error => console.log(error));     
  }
  inActive() {
    this.customerService.inActive(this.customer.id, this.customer).subscribe(customer => {
      this.customer = customer;
      this.listCustomer.reloadData();
    }, error => console.log(error));   
  }
  update(){
    this.router.navigate(['editCustomer/', this.customer.id]);  
  }

  deleteCustomer(){
    this.customerService.deleteCustomer(this.customer.id).subscribe(() => {
        this.listCustomer.reloadData();
      }, error => console.log(error));
  }
}
