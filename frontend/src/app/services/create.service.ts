import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Statique } from '../utils/Statique';
import { eb_user } from '../classes/eb_user';
import { map } from 'rxjs/operators';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  private users: eb_user[] = [];

  constructor(private http: HttpClient) { }

  usersSubject = new Subject<eb_user[]>();

  addUser(user: eb_user){
    let formData = new FormData();
    formData.append('user', JSON.stringify(user)); 
    return this.http.post(Statique.CREATE_USER, formData);
  }

  editUser(user: eb_user){
    return this.http.put(Statique.EDIT_USER+ '/' + user.id, user);
  }

  getUsers(){
    return this.http.get(Statique.USER_LIST);
  }

  getUserById(id: string | number) {
    return this.http.get<eb_user>(Statique.USER_ID + '/' + id);
  
  }

  removeUser(){

  }
}
