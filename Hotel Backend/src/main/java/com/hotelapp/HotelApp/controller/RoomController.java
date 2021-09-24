package com.hotelapp.HotelApp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotelapp.HotelApp.helper.RoomAlreadyAvailableException;
import com.hotelapp.HotelApp.helper.UserFoundException;
import com.hotelapp.HotelApp.model.room.Room;
import com.hotelapp.HotelApp.service.RoomService;

@RestController
@CrossOrigin("*")
//@RequestMapping("/room")

public class RoomController {
	
	@Autowired
	private RoomService roomService;
	
	
	//add question
    @PostMapping("/add-room")
    public ResponseEntity<Room> add(@RequestBody Room room) throws Exception{
    	    	
        return ResponseEntity.ok(roomService.addRoom(room));
    }
    
    @GetMapping("/room-list")
	public List<Room> getRooms () {
		return roomService.getRoomList();
	}
    
    
    //delete question
    @DeleteMapping("/delete/{roomId}")
    public void delete(@PathVariable("roomId") Long roomId) {
    	
    	roomService.deleteRoom(roomId);
   
    }
    
    @ExceptionHandler(RoomAlreadyAvailableException.class)
    public ResponseEntity<?> exceptionHandler(RoomAlreadyAvailableException ex) {
        return ResponseEntity.ok(ex.getMessage());
    }
    

}
