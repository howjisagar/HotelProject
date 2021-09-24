package com.hotelapp.HotelApp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelapp.HotelApp.model.User;
import com.hotelapp.HotelApp.model.room.Booking;
import com.hotelapp.HotelApp.model.room.Room;
import com.hotelapp.HotelApp.repo.BookingRepository;
import com.hotelapp.HotelApp.repo.RoomRepository;
import com.hotelapp.HotelApp.repo.UserRepository;

@Service
public class BookingServiceImpl implements BookingService{
	
	
	@Autowired
	private BookingRepository bookingRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private RoomRepository roomRepo;

	@Override
	public Booking confirmBooking(Long roomId,Long id,Booking booking) {
		// TODO Auto-generated method stub
		Room room = roomRepo.findById(roomId).get();
		booking.setRoom(room);
		User user = userRepo.findById(id).get();
		booking.setUser(user);
		
		return bookingRepo.save(booking);
	}


	@Override
	public List<Booking> getBookedList() {
		
		// TODO Auto-generated method stub
		return bookingRepo.findAll();
	}


	@Override
	public void cancelBooking(Long booking_id) {
		// TODO Auto-generated method stub
		bookingRepo.deleteById(booking_id);;
	}

	
	
}
