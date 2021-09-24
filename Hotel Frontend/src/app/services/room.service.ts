import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  

  constructor(private httpClient: HttpClient) { }


  roomList(): Observable<any> {
    return this.httpClient.get(`${baseUrl}/room-list`);
  }

  // public roomList() {
  //   return this.httpClient.get(`${baseUrl}/room/`);
  // }

  public getRooms(categoryTitle: any) {
    return this.httpClient.get(`${baseUrl}/${categoryTitle}`);
  }

  //add new category
  public addRooms(rooms: any) {
    console.log(rooms);
    return this.httpClient.post(`${baseUrl}/add-room`, rooms);
  }

  public deleteRoom(roomId: number): Observable<Object> {
    return this.httpClient.delete(baseUrl + '/delete/' + roomId);
  }

  // public deleteRoom(roomId: any) {
  //   return this._http.delete(`${baseUrl}/room/delete` , roomId);
  // }

  public roomBook(username: string | number | boolean, rooms: any) {
    return this.httpClient.post(baseUrl + '/confirm-booking/', null, {
      params: new HttpParams().append('username', username).append('rooms', rooms)
    });
  }

}
