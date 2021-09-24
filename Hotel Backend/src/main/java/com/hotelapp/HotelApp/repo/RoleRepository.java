package com.hotelapp.HotelApp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelapp.HotelApp.model.Role;


public interface RoleRepository extends JpaRepository<Role,Long> {
}
