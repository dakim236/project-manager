import { Component, OnInit } from '@angular/core';
import { CreateService } from 'src/app/services/create.service';
import { Router } from '@angular/router';
import { eb_user } from 'src/app/classes/eb_user';
import { EbRole } from 'src/app/classes/role';
import { listUsers } from 'src/app/classes/listUser';
import { from } from 'rxjs';
import { listRoles } from 'src/app/classes/listRole';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  user: eb_user;
  roles: EbRole[];
  listRole: any[] = [];

  domaines = ['développement','modélisation'];

  constructor(private createService: CreateService, private router: Router) { }

  ngOnInit() {
    this.user = new eb_user();
    this.getListRole();
  }

  getListRole(){
    this.roles = [];
    this.createService.getListRole().subscribe((res: listRoles) =>{
      if(res.exist){
        this.roles = res.data;
  }
        console.log(this.roles);
      });
  }

  addUser(){
    this.createService.addUser(this.user).subscribe((res:any) => {
      if(res.exist) this.router.navigate(['liste-user']);
    });
  }

}
