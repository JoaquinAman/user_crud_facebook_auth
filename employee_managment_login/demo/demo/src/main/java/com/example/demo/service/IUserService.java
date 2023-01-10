package com.example.demo.service;

import com.example.demo.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IUserService {
    User saveUser(User user);

    List<User> getAllUsers();


    User getUserById(Long id);

    boolean deleteUser(Long id);

    User updateUser(Long id, User user);
}
