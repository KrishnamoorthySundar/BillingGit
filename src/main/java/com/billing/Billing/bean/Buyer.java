package com.billing.Billing.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Buyer {
	@Id
	private int buyerId;
	private String buyerName;
	private String buyerGst;
	private String buyerStreet;
	private String buyerDistrict;
	private String buyerState;
	private int buyerCode;
	private String buyerMobile;

	public Buyer(int buyerId, String buyerName, String buyerGst, String buyerStreet, String buyerDistrict,
			String buyerState, int buyerCode, String buyerMobile) {
		super();
		this.buyerId = buyerId;
		this.buyerName = buyerName;
		this.buyerGst = buyerGst;
		this.buyerStreet = buyerStreet;
		this.buyerDistrict = buyerDistrict;
		this.buyerState = buyerState;
		this.buyerCode = buyerCode;
		this.buyerMobile = buyerMobile;
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

	public String getBuyerGst() {
		return buyerGst;
	}

	public void setBuyerGst(String buyerGst) {
		this.buyerGst = buyerGst;
	}

	public String getBuyerStreet() {
		return buyerStreet;
	}

	public void setBuyerStreet(String buyerStreet) {
		this.buyerStreet = buyerStreet;
	}

	public String getBuyerDistrict() {
		return buyerDistrict;
	}

	public void setBuyerDistrict(String buyerDistrict) {
		this.buyerDistrict = buyerDistrict;
	}

	public String getBuyerState() {
		return buyerState;
	}

	public void setBuyerState(String buyerState) {
		this.buyerState = buyerState;
	}

	public int getBuyerCode() {
		return buyerCode;
	}

	public void setBuyerCode(int buyerCode) {
		this.buyerCode = buyerCode;
	}

	public String getBuyerMobile() {
		return buyerMobile;
	}

	public void setBuyerMobile(String buyerMobile) {
		this.buyerMobile = buyerMobile;
	}

	@Override
	public String toString() {
		return "Buyer [buyerId=" + buyerId + ", buyerName=" + buyerName +"buyerGst="+buyerGst+"buyerStreet="+buyerStreet+"buyerDistrict"+buyerDistrict+"buyerState"+buyerState+"buyerCode"+buyerCode+"buyerMobile"+buyerMobile+ "]";
	}
}
