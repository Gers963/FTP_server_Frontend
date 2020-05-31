import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/sistemServices';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-edit-file',
  templateUrl: './edit-file.component.html',
  styleUrls: ['./edit-file.component.scss']
})
export class EditFileComponent implements OnInit {

  public arquivo = ''
  private arqFirstName = '';
  private arqNewName = '';

  constructor( 
    private service: UploadService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.service.getFile(this.service.getId())
    .then(resp => {
      if(resp.msg){
        this.router.navigate([resp.msg]);
      }
      this.arquivo = resp
      this.arqFirstName = resp.name
    })
  }

  onChange(text){
    this.arqNewName = text
  }

  updateFile(){
    this.service.updateFile(this.arqNewName, this.service.getId())
    .then(response => {
      if(response.msg){
        this.router.navigate([response.msg]);
      }
    })
  }

}
