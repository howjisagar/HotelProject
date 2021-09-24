import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { RoomBookingComponent } from './pages/user/room-booking/room-booking.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { AddRoomsComponent } from './pages/admin/add-rooms/add-rooms.component';
import { CancelBookingComponent } from './pages/user/cancel-booking/cancel-booking.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { AdminSideNavComponent } from './pages/admin/admin-side-nav/admin-side-nav.component';
import { UserSideNavComponent } from './pages/user/user-side-nav/user-side-nav.component';
import { DeleteRoomComponent } from './pages/admin/delete-room/delete-room.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    
    UserDashboardComponent,
    UserProfileComponent,
    RoomBookingComponent,
    AdminProfileComponent,
    AddRoomsComponent,
    CancelBookingComponent,
    AdminDashboardComponent,
    AdminSideNavComponent,
    UserSideNavComponent,
    DeleteRoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
