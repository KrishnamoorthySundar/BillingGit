package com.billing.Billing.dao;

import org.springframework.data.repository.CrudRepository;

import com.billing.Billing.bean.User;

public interface UserRepository extends CrudRepository<User, String>{

}
