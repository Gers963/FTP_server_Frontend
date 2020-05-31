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

  private id;

  getId(){
    return this.id
  }

  setId(id: any){
    this.id = id
  }

  getFile(id: any){
    return fetch(`${Base.Base_URL}get/file/${id}`, {
      method: "GET"
    })
    .then(response => {
      return response.json()
    })
  }

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

  uploadFile(file: File, image) {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('imagem', image)
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

  updateFile(newName: any, id: any){
    const formData = new FormData()
    formData.append('name', newName)
    return fetch(`${Base.Base_URL}update/file/${id}`, {
      method: "POST",
      headers: {
        name: newName
      }
    })
    .then(response => {
      return response.json()
    })
  }

  register(name: any, email: any, password: any){
    return fetch(`${Base.Base_URL}api/register`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name, email: email, password: password})
    })
    .then(response => {
      return response.json()
    })
  }

  login(email: any, password: any){
    return fetch(`${Base.Base_URL}api/login`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email, password: password})
    })
    .then(response => {
      return response.json()
    })
  }

}
