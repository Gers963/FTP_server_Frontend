import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadService } from '../pages/services/sistemServices';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';

  constructor(
    private service: UploadService,
    private router: Router,
  ) { }

  ngOnInit() {
    var token = localStorage.getItem('@token')
    if(token){
      this.router.navigate(['./pages/upload']);
    }
  }

  
  onChangeEmail(email) {
    this.email = email;
  }

  onChangePassword(password) {
    this.password = password;
  }

  login() {
    this.service.login(this.email, this.password)
      .then(respose => {
        console.log(respose)
        if(respose.status){
          localStorage.setItem('@token', respose.token);
          localStorage.setItem('@name', respose.name);
          this.router.navigate(['./pages/upload']);
        }else if(respose.error){
          alert("senha incorreta")
        }
      })
  }

}
