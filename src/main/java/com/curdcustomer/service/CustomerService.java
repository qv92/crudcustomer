package com.curdcustomer.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.curdcustomer.model.Customer;

public interface CustomerService {
	Customer create(Customer customer);
	
	ResponseEntity<Customer> update(Customer customer, Long id);
	
	ResponseEntity<Customer> isActive(Customer customer, Long id);
	
	ResponseEntity<Customer> inActive(Customer customer, Long id);
	
	List<Customer> getAllCustomers();
	
	ResponseEntity<String> deleteAllCustomers();
	
	ResponseEntity<String>  deleteCustomer(long id);
	
	Optional<Customer> findById(long id);
	
	List<Customer> findByAge(int age);
}
