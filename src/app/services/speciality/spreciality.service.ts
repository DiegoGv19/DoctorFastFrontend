import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Speciality } from 'src/app/model/speciality';
import { ApiService } from '../api/api.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  private urlFindEspecialty: string = "admin/especialidades";
  
  constructor(private apiService: ApiService, private loginService: LoginService, private http: HttpClient) { }

  findSpecialityList(): Observable<Speciality[]>
  {
    return this.http.get<Speciality[]>(`${this.apiService.getUrl()}/${this.urlFindEspecialty}`, {headers: this.loginService.getHttpOptions()});
  } 
}
