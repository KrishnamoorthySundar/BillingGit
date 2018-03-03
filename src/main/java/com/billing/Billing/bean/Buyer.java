package com.billing.Billing.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Buyer {
	@Id
	private int buyerId;
	private String buyerName;
	private String buyerGst;
	public Buyer(int buyerId, String buyerName) {
		super();
		this.buyerId = buyerId;
		this.buyerName = buyerName;
	}

	public Buyer(int buyerId, String buyerName, String buyerGst) {
		super();
		this.buyerId = buyerId;
		this.buyerName = buyerName;
		this.buyerGst = buyerGst;
	}

	public String getBuyerGst() {
		return buyerGst;
	}

	public void setBuyerGst(String buyerGst) {
		this.buyerGst = buyerGst;
	}

	public Buyer(int buyerId) {
		super();
		this.buyerId = buyerId;
	}

	public Buyer(String buyerName) {
		super();
		this.buyerName = buyerName;
	}

	public Buyer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getBuyerId() {
		return buyerId;
	}

	public void setBuyerId(int buyerId) {
		this.buyerId = buyerId;
	}

	public String getBuyerName() {
		return buyerName;
	}

	public void setBuyerName(String buyerName) {
		this.buyerName = buyerName;
	}

	@Override
	public String toString() {
		return "Buyer [buyerId=" + buyerId + ", buyerName=" + buyerName + "]";
	}
}
