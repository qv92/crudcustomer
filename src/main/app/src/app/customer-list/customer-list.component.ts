import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../model/Customer';
import { CustomerService } from '../service/customer-service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Observable<Customer[]>;
 
  constructor(private customerService: CustomerService) { }
 
  ngOnInit() {
    this.reloadData();
  }
 
  deleteCustomers() {
    this.customerService.deleteAllCustomers().subscribe(data => {
          this.reloadData();
        },error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.customers = this.customerService.getCustomersList();
  }
}
