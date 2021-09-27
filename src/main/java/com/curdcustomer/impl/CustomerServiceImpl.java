package com.curdcustomer.impl;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import com.curdcustomer.model.Customer;
import com.curdcustomer.repository.CustomerRepository;
import com.curdcustomer.service.CustomerService;

@Component
@Transactional
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;

	@Override
	public Customer create(Customer customer) {
		return customerRepository.save(customer);
	}

	@Override
	public ResponseEntity<Customer> update(Customer customer, Long id) {
		Optional<Customer> customerDataOptional = customerRepository.findById(id);
		if (customerDataOptional.isPresent()) {
			Customer _Customer = customerDataOptional.get();
		    _Customer.setFirstname(customer.getFirstname());
		    _Customer.setLastname(customer.getLastname());
		    _Customer.setAge(customer.getAge());
			return new ResponseEntity<Customer>(customerRepository.save(_Customer), HttpStatus.OK);
		}else {
			return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
		}
	}

	@Override
	public List<Customer> getAllCustomers() {
		List<Customer> customers = customerRepository.findAll();
		customers = customers.stream().sorted(Comparator.comparing(Customer::getAge))
				.collect(Collectors.toList());
		return customers;
	}

	@Override
	public ResponseEntity<String> deleteAllCustomers() {
		customerRepository.deleteAll();
		return new ResponseEntity<String>("All customer have been deleted!", HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> deleteCustomer(long id) {
		customerRepository.deleteById(id);
		return new ResponseEntity<String>("Customer has been deleted!", HttpStatus.OK);
	}

	@Override
	public Optional<Customer> findById(long id) {
		Optional<Customer> customers = customerRepository.findById(id);
		return customers;
	}

	@Override
	public List<Customer> findByAge(int age) {
		List<Customer> customers = customerRepository.findByAge(age);
		return customers;
	}

	@Override
	public ResponseEntity<Customer> isActive(Customer customer, Long id) {
		Optional<Customer> customerDataOptional = customerRepository.findById(id);
		if (customerDataOptional.isPresent()) {
			Customer _Customer = customerDataOptional.get();
		    _Customer.setActive(true);
			return new ResponseEntity<Customer>(customerRepository.save(_Customer), HttpStatus.OK);
		}else {
			return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
		}
	}

	@Override
	public ResponseEntity<Customer> inActive(Customer customer, Long id) {
		Optional<Customer> customerDataOptional = customerRepository.findById(id);
		if (customerDataOptional.isPresent()) {
			Customer _Customer = customerDataOptional.get();
		    _Customer.setActive(false);
			return new ResponseEntity<Customer>(customerRepository.save(_Customer), HttpStatus.OK);
		}else {
			return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
		}
	}

}
