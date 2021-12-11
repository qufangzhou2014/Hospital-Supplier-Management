package com.hospital.supplier.system.service;

import com.hospital.supplier.system.model.User;

import java.util.List;

/**
 * @author Joe
 */

public interface UserService {
    List<User> findAllUser();

    User findByUsername(String userName);

    User findByUsernameAndPassword(String userName, String password);

    User saveOrUpdateUser(User user);

    void deleteUserById(String id);

}
