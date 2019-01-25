package com.jarek.demologowanie3.service;

import com.jarek.demologowanie3.dao.UserRepository;
import com.jarek.demologowanie3.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User save(User user) {
        return userRepository.saveAndFlush(user);
    }

    public User update(User user) {
        return userRepository.save(user);
    }

    public User find(String userName) {
        return userRepository.findOneByUsername(userName);
    }

//    public User find(Long id) {
//        return userRepository.findOne(id);
//    }
}
