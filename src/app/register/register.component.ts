import { Component, OnInit } from '@angular/core';
import { UploadService } from '../pages/services/sistemServices';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public name = '';
  public email = '';
  public password = '';

  constructor(
    private service: UploadService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onChangeName(name) {
    this.name = name;
  }

  onChangeEmail(email) {
    this.email = email;
  }

  onChangePassword(password) {
    this.password = password;
  }

  submit() {
    this.service.register(this.name, this.email, this.password)
      .then(respose => {
        if (respose.status) {
          alert("Salvo com sucesso")
          this.router.navigate(['auth/']);
        }else{
          alert("Erro ao salvar usuário")
        }
      })
  }

}
