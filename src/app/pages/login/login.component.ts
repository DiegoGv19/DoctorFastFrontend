import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) { 
    this.formLogin = this.formBuilder.group({});
    this.createForm();
  }

  ngOnInit(): void {
  }

  public createForm()
  {
    this.formLogin = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });  
  }

  private saveAdminInformatio(admin: Admin) 
  {
    this.loginService.createAdmin(admin);
    localStorage.setItem("admin", JSON.stringify(admin));
    this.router.navigateByUrl("doctor");
  }

  public Startlogin()
  {
    this.loginService.login(this.formLogin.value as Login).subscribe((request) => {
      if(request.authorities[0].authority === "ROLE_ADMINISTRADOR" && request.token !== "") {
         this.saveAdminInformatio(request);
      }
    })
  }

}
