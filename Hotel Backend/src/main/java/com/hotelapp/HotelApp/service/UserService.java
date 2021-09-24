package com.hotelapp.HotelApp.service;

import java.util.Set;

import com.hotelapp.HotelApp.model.User;
import com.hotelapp.HotelApp.model.UserRole;

public interface UserService {

    //creating user
    public User createUser(User user, Set<UserRole> userRoles) throws Exception;

    //get user by username
    public User getUser(String username);

    //delete user by id
    public void deleteUser(Long userId);
    
    
}
