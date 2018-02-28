package com.billing.Billing.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.billing.Billing.bean.Buyer;
import com.billing.Billing.dao.BuyerRepository;

@Service
public class BuyerService {
	@Autowired
	private BuyerRepository brObj;

	public void addBuyer(Buyer buyer) {
		brObj.save(buyer);
	}

	public void deleteBuyer(Buyer buyer) {
		brObj.delete(buyer);
	}

	public List<Buyer> getBuyers() {
		return (List<Buyer>) brObj.findAll();
	}
}
