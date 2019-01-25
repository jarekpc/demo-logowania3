package com.jarek.demologowanie3.dao;

import com.jarek.demologowanie3.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public User findOneByUsername(String username);
}
