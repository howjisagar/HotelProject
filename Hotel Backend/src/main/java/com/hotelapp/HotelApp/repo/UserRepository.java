package com.hotelapp.HotelApp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelapp.HotelApp.model.User;


public interface UserRepository extends JpaRepository<User, Long> {

    public User findByUsername(String username);
}
