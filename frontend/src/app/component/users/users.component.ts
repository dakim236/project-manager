import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Subscription, from, BehaviorSubject } from 'rxjs';
import { CreateService } from 'src/app/services/create.service';
import 'rxjs';
import { eb_user } from 'src/app/classes/eb_user';
import { HttpClient } from '@angular/common/http';
import { listUsers } from 'src/app/classes/listUser';
import { Router } from '@angular/router';
import { removeUser } from 'src/app/classes/removeUser';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

    users: eb_user [];
    userSubscription: Subscription;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    
  constructor(private createService: CreateService,
              private http: HttpClient,
              private router: Router,
              private alertService: AlertService) {}
  

  ngOnInit(){    
    this.paginator
    this.getUsers();
    //this.removeUser();
  }

  deleteUser(id){
    this.alertService.confirm('Veuillez confirmer', 'Voulez-vous vraiment supprimer ?')
        .then((confirmed) => console.log('confirmé:', confirmed))
        .catch(() => console.log('fermé'));
    this.removeUser(id);
  }

  removeUser(id){
      this.createService.removeUser(id).subscribe(res => {
        if(res){
          for (var i = 0; i < this.users.length; i++) {
            if(this.users[i].id == id){ this.users.splice(i, 1); break;}            
          }
        }
      })
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
