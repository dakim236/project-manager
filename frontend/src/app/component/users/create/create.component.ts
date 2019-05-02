import { Component, OnInit } from '@angular/core';
import { CreateService } from 'src/app/services/create.service';
import { Router } from '@angular/router';
import { eb_user } from 'src/app/classes/eb_user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  user: eb_user;

  domaines = ['développement','modélisation'];

  constructor(private createService: CreateService, private router: Router) { }

  ngOnInit() {
    this.user = new eb_user();
  }


  addUser(){
    console.log(this.user)
    this.createService.addUser(this.user).subscribe(res => {
      console.log(res);
    })
  }

}
