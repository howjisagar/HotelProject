package com.hotelapp.HotelApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hotelapp.HotelApp.helper.RoomAlreadyAvailableException;
import com.hotelapp.HotelApp.model.room.Room;
import com.hotelapp.HotelApp.repo.RoomRepository;

@Service
public class RoomServiceImpl implements RoomService{

	@Autowired
	private RoomRepository roomRepo;
	
	
	@Override
	public Room addRoom(Room room) throws Exception {
		// TODO Auto-generated method stub
		
//		Room local = roomRepo.findById(room.getRoomId()).get();
//        if (local != null) {
//            System.out.println("Room is already available with entered id !!");
//            throw new RoomAlreadyAvailableException();
//        } else {

            return roomRepo.save(room);
        
//		return local;
	}

	@Override
	public void deleteRoom(Long roomId) {
		// TODO Auto-generated method stub
		roomRepo.deleteById(roomId);	
	}

	@Override
	public List<Room> getRoomList() {
		// TODO Auto-generated method stub
		return roomRepo.findAll();
	}

}
