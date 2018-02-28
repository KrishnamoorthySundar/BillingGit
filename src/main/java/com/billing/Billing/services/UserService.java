package com.billing.Billing.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.billing.Billing.bean.User;
import com.billing.Billing.dao.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository usObj;

	public void addProduct(User user) {
		usObj.save(user);
	}
	
	public List<User> getProducts() {
		return (List<User>) usObj.findAll();
	}

	public boolean validate(User user) {
		boolean status = false;
		if (user.getUserName().equalsIgnoreCase("admin") && user.getUserPassword().equalsIgnoreCase("admin")) {
			status = true;
		}
		return status;
	}
}
