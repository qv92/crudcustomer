import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';

const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  {path: 'customer', component: CustomerListComponent},
  {path: 'add', component: AddCustomerComponent},
  {path: 'findbyage', component: SearchCustomerComponent},
  {path: 'editCustomer/:id', component: EditCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
