import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { USERS } from '../data/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserTabService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }

  getNom(firstName: string): User{
    return USERS.find(User => User.lastName === firstName);
  }

  getPrenom(lastName: string): User{
    return USERS.find(User => User.lastName === lastName);
  }

  getEmail(email: string): User{
    return USERS.find(User => User.lastName === email);
  }
}
