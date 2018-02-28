package com.billing.Billing.dao;

import org.springframework.data.repository.CrudRepository;

import com.billing.Billing.bean.Buyer;

public interface BuyerRepository extends CrudRepository<Buyer, Integer> {

}
