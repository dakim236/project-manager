import { Component, OnInit } from '@angular/core';
import { eb_user } from 'src/app/classes/eb_user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateService } from 'src/app/services/create.service';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { listUsers } from 'src/app/classes/listUser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  user: eb_user;
  updateForm: FormGroup;
  title = 'Edit User';
  domaines = ['développement','modélisation'];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private createService: CreateService) {
                this.createForm();
               }

  createForm(){
    this.updateForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      mail: ['', Validators.required],
      domaine: ['', Validators.required],
      //client: eb_user[];
      //x_eb_role : ['', Validators.required],
    });
  }

  updateUser(){    
    this.createService.updateUser(this.user).subscribe((res:any) =>{
      if(res.exist) this.router.navigate(['liste-user']);
    });
    
  }
  ngOnInit() {
    this.user = new eb_user();
    this.getUserByRouterParam();    
  }

  getUserByRouterParam() {
    this.route.params.subscribe(params =>{
      this.createService.editUser(params['id']).subscribe((res: any) =>{
        if(res.exist) this.user = res.data;
      });
    });
  }

  

}
