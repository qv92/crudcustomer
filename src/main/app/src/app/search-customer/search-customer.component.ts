import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomerService } from '../service/customer-service';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {
  age: number;
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.age = 0;
  }

  private searchCustomer(){
    this.customerService.getCustomersByAge(this.age).subscribe(customers => this.customers = customers);
  }

  onSubmit(){
    this.searchCustomer();
  }
}
