import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }
  
  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}/${id}`);
  }
 
  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}` + `/create`, customer);
  }
 
  updateCustomer(id: number, value: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.baseUrl}/update/${id}`, value);
  }
 
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
 
  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllCustomers`);
  }
 
  getCustomersByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }
  getCustomersById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }
  deleteAllCustomers(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/deleteAllCustomers`, { responseType: 'text' });
  }
  isActive(id: number, value: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.baseUrl}/isActive/${id}`, value);
  }
  inActive(id: number, value: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.baseUrl}/inActive/${id}`, value);
  }
}