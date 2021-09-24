package com.hotelapp.HotelApp.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hotelapp.HotelApp.model.room.Room;

public interface RoomRepository extends JpaRepository<Room,Long>{


	
}
