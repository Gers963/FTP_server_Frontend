import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Base } from '../../config/base';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) {}

  /*
  createUser(user: UsuarioSistema) {
    return this.http.post(Base.API_ENDPOINT + "admin/login/create", user)
  }

  getUsers(): Observable<any>{
    return this.http.get(Base.API_ENDPOINT + "admin/login/list");
  }
  */

  deletUser(id: any) {
    return fetch(`${Base.Base_URL}delet/file/${id}`, {
      method: "DELETE"
    })
    .then(response => {
      return response.json()
    })
  }

  downloadFile(file: any){
    return fetch(`${Base.Base_URL}download/file/${file}`, {
      method: "GET",
    })
    .then(resp => {
      return resp.blob()
    })
  }

  uploadFile(file: File) {
    const formData = new FormData()
    formData.append('file', file)
    return fetch(`${Base.Base_URL}add/file`, {
      method: "POST",
      body: formData,
    })
    .then(response => {
      return response.json()
    })
  }

  getFiles() {
    return fetch(`${Base.Base_URL}list/file`, {
      method: "GET"
    })
    .then(response => {
      return response.json()
    })
  }

}
