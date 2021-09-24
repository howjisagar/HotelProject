package com.hotelapp.HotelApp.service;

import java.util.List;

import com.hotelapp.HotelApp.model.room.Booking;

public interface BookingService {

	public Booking confirmBooking(Long roomId,Long id,Booking booking);
	
	public List<Booking> getBookedList();
	
	public void cancelBooking(Long booking_id);
	
	
}
