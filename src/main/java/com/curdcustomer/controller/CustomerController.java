package com.curdcustomer.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curdcustomer.model.Customer;
import com.curdcustomer.service.CustomerService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CustomerController {

  @Autowired
  private CustomerService customerService;
  
	@PostMapping(value = "/customers/create")
	public Customer create(@RequestBody Customer customer) {
		return customerService.create(customer);
	}
	
	@GetMapping("/customers/getAllCustomers")
	public List<Customer> getAllCustomers(){
		return customerService.getAllCustomers();
	}
	@PutMapping("/customers/update/{id}")
	public ResponseEntity<Customer> update(@RequestBody Customer customer, @PathVariable("id") Long id){
	    return customerService.update(customer, id);
	}
	@DeleteMapping("/customers/deleteAllCustomers")
	public ResponseEntity<String> deleteAllCustomers() {
		return customerService.deleteAllCustomers();
	}
	
	@DeleteMapping("/customers/delete/{id}")
	public ResponseEntity<String>  deleteCustomer(@PathVariable("id") long id){
		return customerService.deleteCustomer(id);
	}
	@GetMapping(value="customers/id/{id}")
	Optional<Customer> findById(@PathVariable long id) {
		return customerService.findById(id);
	}
	@GetMapping(value="customers/age/{age}")
	public List<Customer> findByAge(@PathVariable int age){
		return customerService.findByAge(age);
	}
	@PutMapping("/customers/isActive/{id}")
	public ResponseEntity<Customer> isActive(@RequestBody Customer customer, @PathVariable Long id) {
		return customerService.isActive(customer, id);
	}
	@PutMapping("/customers/inActive/{id}")
	ResponseEntity<Customer> inActive(@RequestBody Customer customer, @PathVariable Long id) {
		return customerService.inActive(customer, id);
	}
}
