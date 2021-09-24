package com.hotelapp.HotelApp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotelapp.HotelApp.model.User;
import com.hotelapp.HotelApp.model.room.Booking;
import com.hotelapp.HotelApp.model.room.Room;
import com.hotelapp.HotelApp.service.BookingService;
import com.hotelapp.HotelApp.service.RoomService;
import com.hotelapp.HotelApp.service.UserService;

@RestController
@CrossOrigin("*")
//@RequestMapping("/booking")
public class BookingController {

	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private RoomService roomService;
	
	@PostMapping("/add-booking/{roomId}/{id}")
	public Booking addBooking(@PathVariable("roomId") Long roomId,@PathVariable("id") Long id,@RequestBody Booking booking) {
		
		
		bookingService.confirmBooking(roomId,id,booking);
		return booking;
	}
	
	@GetMapping("/get-list/{id}")
	public List<Booking> getList (@PathVariable("id") Long id) {
		
		List<Booking> list = new ArrayList<>();
		list = bookingService.getBookedList();
		for(Booking b: list) {
			if(b.getUser().getId() == id) {
				return list;
			}
		}
		return null;
	}
		
	
	@DeleteMapping("/cancel-room/{booking_id}")
    public void delete(@PathVariable("booking_id") Long booking_id) {
        
		bookingService.cancelBooking(booking_id);
		
    }
	
}
