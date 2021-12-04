package com.hospital.supplier.system.service.impl;

import com.hospital.supplier.system.repository.UserRepository;
import com.hospital.supplier.system.service.UserService;
import com.hospital.supplier.system.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Joe
 */

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAllUser() {
        return userRepository.findAllUser();
    }

    @Override
    public User findByUsername(String userName) {
        return userRepository.findByUsername(userName);
    }

    @Override
    public User findByUsernameAndPassword(String userName, String password) {
        return userRepository.findByUsernameAndPassword(userName, password);
    }

    @Override
    public User saveOrUpdateUser(User user) {
        return userRepository.save(user);
    }

}
