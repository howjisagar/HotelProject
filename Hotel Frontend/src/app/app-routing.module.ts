import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
// import { ProfileComponent } from './pages/admin/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component'

import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { AddRoomsComponent } from './pages/admin/add-rooms/add-rooms.component';
import { RoomBookingComponent } from './pages/user/room-booking/room-booking.component';
import { CancelBookingComponent } from './pages/user/cancel-booking/cancel-booking.component';
import { DeleteRoomComponent } from './pages/admin/delete-room/delete-room.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    // component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
      },
      {
        path: 'admin-profile',
        component: AdminProfileComponent,
      },
      {
        path: 'add-rooms',
        component: AddRoomsComponent,
      },
      {
        path: 'delete-rooms',
        component: DeleteRoomComponent,
      },
    ],
  },
  {
    path: 'user',
    // component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: '',
        component: UserDashboardComponent,
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
      },
      {
        path: 'room-booking',
        component: RoomBookingComponent,
      },
      {
        path: 'cancel-booking',
        component: CancelBookingComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
