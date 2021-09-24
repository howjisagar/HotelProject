import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { BookingModel } from './hotel';

@Injectable({
  providedIn: 'root'
})

export class BookingService {

  
  constructor(private _http: HttpClient) { }

  public addBooking(roomId:number,user_id:number,bookingModel:object): Observable<Object> {
    
    return this._http.post(`${baseUrl}/add-booking/${roomId}/${user_id}`, bookingModel);
  }

  public getBookingList(user_id:number): Observable<Object>{
    return this._http.get(`${baseUrl}/get-list/${user_id}`);
  }

  public cancelCurrentBooking(booking_id:number): Observable<Object>{
    return this._http.delete(`${baseUrl}/cancel-room/${booking_id}`)
  }
  
}
