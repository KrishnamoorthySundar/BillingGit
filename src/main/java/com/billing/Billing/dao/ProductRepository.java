package com.billing.Billing.dao;

import org.springframework.data.repository.CrudRepository;

import com.billing.Billing.bean.Product;

public interface ProductRepository extends CrudRepository<Product, Integer>{

}
