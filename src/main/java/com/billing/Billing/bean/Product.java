package com.billing.Billing.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Product {

	@Id
	private int productId;

	private String productName;
	
	public Product(String productName) {
		// super();
		this.productName = productName;
	}

	public Product(int productId) {
		// super();
		this.productId = productId;
	}

	public Product(int productId, String productName) {
		// super();
		this.productId = productId;
		this.productName = productName;
	}

	public Product() {
		// super();
		// TODO Auto-generated constructor stub
	}


	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + "]";
	}

}
