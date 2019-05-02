import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription, from, BehaviorSubject } from 'rxjs';
import { CreateService } from 'src/app/services/create.service';
import 'rxjs';
import { eb_user } from 'src/app/classes/eb_user';
import { HttpClient } from '@angular/common/http';
import { listUsers } from 'src/app/classes/listUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

    private users: eb_user [];
    userSubscription: Subscription;
    
  constructor(private createService: CreateService,
              private http: HttpClient,
              private router: Router) {}
  

  ngOnInit(){    
    this.getUsers();
  }

  editUser(user: eb_user): void{
    //this.users = [];
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", String.fromCharCode(user.id));
    this.router.navigate(['edit-user']);
  };

  getUsers(){
    this.users = [];
    this.createService.getUsers().subscribe((resp: listUsers) =>{
      if(resp.exist) {
        this.users = resp.data;
      }
      console.log(this.users);
    });
  }

  ngOnDestroy(){
    console.log(this.users)
  }

}
