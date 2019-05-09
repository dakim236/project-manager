import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Statique } from '../utils/Statique';
import { eb_user } from '../classes/eb_user';
import { EbRole } from '../classes/role';
import { map } from 'rxjs/operators';
import { error } from 'util';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  private users: eb_user[] = [];
  roles: EbRole[];

  constructor(private http: HttpClient) { }

  usersSubject = new Subject<eb_user[]>();

  addUser(user: eb_user){
    let formData = new FormData();
    formData.append('user', JSON.stringify(user)); 
    return this.http.post(Statique.CREATE_USER, formData);
  }

  editUser(id){
    return this
              .http
              .get(Statique.EDIT_USER +'/'+id)
              .pipe(map(res =>{return res;}));
  }
  updateUser(user){
    let formData = new FormData();
    formData.append('user', JSON.stringify(user)); 
    return this.http.post(Statique.UPDATE_USER, formData).pipe(map(res =>{return res;}));
  }

  getUsers(){
    return this.http.get(Statique.USER_LIST);
  }

  getListRole(){
    return this.http.get(Statique.ROLE_LIST);
  }

  removeUser(id){
    let headers = new HttpHeaders();
    let formData = new FormData();
    formData.append('id', id);
    return this.http.post(Statique.DELETE_USER, formData, { headers }).pipe(map(res => { return res; }));
  }
}
