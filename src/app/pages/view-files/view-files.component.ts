import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/sistemServices';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-view-files',
  templateUrl: './view-files.component.html',
  styleUrls: ['./view-files.component.scss']
})
export class ViewFilesComponent implements OnInit {

  private Files:  any;

  constructor(
    private service: UploadService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getFiles()    
  }

  downloadFile(file, name){
    this.service.downloadFile(file)
    .then(res => {
      const file = new Blob([res], {
        type: res.type
      });

      const blob = window.URL.createObjectURL(file);

      const link = document.createElement('a');
      link.href = blob;
      link.download = name;

      link.click();

      window.URL.revokeObjectURL(blob);
      link.remove();
    })
  }

  getFiles(){
    this.service.getFiles()
    .then(resp => {
      this.Files = resp.files
    })
  }

  delet(id){
    this.service.deletUser(id)
    .then(resp => {      
      alert(resp.msg)      
      this.router.navigate(['./pages/view-files']);
    })
  }

  getFile(id){
    this.service.setId(id)
  }

}
