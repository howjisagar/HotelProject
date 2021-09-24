package com.hotelapp.HotelApp.service;

import java.util.List;

import com.hotelapp.HotelApp.model.room.Room;

public interface RoomService {
	
	public Room addRoom(Room room) throws Exception;
	
	public void deleteRoom(Long roomId);
	
	public List<Room> getRoomList();
	
	
}
