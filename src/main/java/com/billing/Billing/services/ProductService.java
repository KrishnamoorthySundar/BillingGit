package com.billing.Billing.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.billing.Billing.bean.Product;
import com.billing.Billing.dao.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository probj;
	
	public void addProduct(Product product) {
		probj.save(product);
	}
	
	public void deleteProduct(Product product) {
		probj.delete(product);
	}
	
	public List<Product> getProducts() {
		return (List<Product>) probj.findAll();
	}
	

}
