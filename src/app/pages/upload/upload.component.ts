import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/sistemServices';
import { Base } from '../../config/base';

@Component({
  selector: 'ngx-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  fileName: string = "No file selected";
  file: File;
  public imageUrl: string | ArrayBuffer;

  constructor(private UploadService: UploadService) { }

  ngOnInit() {
  }

  onChange(file: File) {
    if (file) {
      this.fileName = file.name;
      this.file = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = event => {
        this.imageUrl = reader.result;
      }
    }
  }

  onUpload() {
    this.UploadService.uploadFile(this.file)
      .then(() => {
        alert('Arquivo enviado com sucesso!!!')
      })
      .catch(() => {
        alert('Erro ao realizar upload')
      })
  }

}
