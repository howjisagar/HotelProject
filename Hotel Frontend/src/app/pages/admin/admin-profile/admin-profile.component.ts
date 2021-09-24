import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  
  constructor(private login: LoginService) { }

  public user: any;

  ngOnInit(): void {

    console.log(this.user);
    this.user = this.login.getUser();
  }

}
