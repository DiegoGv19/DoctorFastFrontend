import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/model/doctor';
import { ApiService } from '../api/api.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private urlFindDoctorList: string = "doctor/list";
  private urlFindDoctorListByDistrict: string = "doctor/por_distrito/";
  private urlFindDoctorListByRanking: string = "doctor/por_rating";
  private urlEditDoctor: string = "doctor/edit";

  private doctorsList: Doctor[] = new Array<Doctor>();
  private doctor: Doctor = new Doctor();

  constructor(private http:HttpClient, private apiService: ApiService, private loginService: LoginService) {

  }

  setDoctorsList(doctorsList: Array<Doctor>): void
  {
    this.doctorsList = doctorsList;
  }

  getDoctorsList(): Array<Doctor>
  {
    return this.doctorsList;
  }

  setDoctor(doctor: Doctor): void
  {
    this.doctor = doctor;
  }

  getDoctor():Doctor
  {
    return this.doctor;
  }

  clearDoctor(): void
  {
    this.doctor = new Doctor();
  }

  findDoctors(): Observable<Doctor[]>
  {    
    return this.http.get<Doctor[]>(`${this.apiService.getUrl()}/${this.urlFindDoctorList}`, {headers: this.loginService.getHttpOptions()});
  }

  editDoctors(doctor: Doctor): Observable<Doctor>
  {
    return this.http.put<Doctor>(`${this.apiService.getUrl()}/${this.urlEditDoctor}/${doctor.idDoctor}`, doctor, {headers: this.loginService.getHttpOptions()});
  }

  findDoctorsByDisctric(distric: string): Observable<Doctor[]>
  {
    return this.http.get<Doctor[]>(`${this.apiService.getUrl()}/${this.urlFindDoctorListByDistrict}${distric}`, {headers: this.loginService.getHttpOptions()});
  }

  findDoctorByRanking(ranking: number): Observable<Doctor[]>
  {
    return this.http.get<Doctor[]>(`${this.apiService.getUrl()}/${this.urlFindDoctorListByRanking}/${ranking}`, {headers: this.loginService.getHttpOptions()});
  }

}
