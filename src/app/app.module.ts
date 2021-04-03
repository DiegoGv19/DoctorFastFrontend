import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyTableDoctorComponent } from './components/doctor/body-table-doctor/body-table-doctor.component';
import { DoctorService } from './services/doctor/doctor.service';
import { EditDoctorComponent } from './pages/doctorPages/edit-doctor/edit-doctor.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuAndHeaderService } from './services/menuAndHeader/menu-and-header.service';
import { SideBarComponent } from './components/menu/side-bar/side-bar.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { ListDoctorsComponent } from './pages/doctorPages/list-doctors/list-doctors.component';
import { ViewDoctorComponent } from './pages/doctorPages/view-doctor/view-doctor.component';
import { ListDoctorsByDistricComponent } from './pages/doctorPages/list-doctors-by-distric/list-doctors-by-distric.component';
import { ListDoctorsByRankingComponent } from './pages/doctorPages/list-doctors-by-ranking/list-doctors-by-ranking.component';
import { HeaderComponent } from './components/menu/header/header.component';
import { BodyTableFilterDoctorComponent } from './components/doctor/body-table-filter-doctor/body-table-filter-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ListDoctorsComponent,
    ViewDoctorComponent,
    EditDoctorComponent,
    LoginComponent,
    ListDoctorsByDistricComponent,
    ListDoctorsByRankingComponent,
    HeaderComponent,
    BodyTableDoctorComponent,
    DoctorComponent,
    BodyTableFilterDoctorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DoctorService,
    MenuAndHeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
