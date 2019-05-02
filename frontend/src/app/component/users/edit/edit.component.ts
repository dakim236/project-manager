import { Component, OnInit } from '@angular/core';
import { eb_user } from 'src/app/classes/eb_user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateService } from 'src/app/services/create.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  user: eb_user[];
  updateForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private createService: CreateService) { }

  ngOnInit() {
    var userId = localStorage.getItem("editUserId");
    if(!userId){
      alert("erreur")
      this.router.navigate(['liste-user']);
      return;
    }
    this.updateForm = this.formBuilder.group({
      id: [],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      mail: ['', Validators.required],
      domaine: ['', Validators.required],
      //client: eb_user[];
      //x_eb_role : ['', Validators.required],
    });
    this.createService.getUserById(userId)
        .subscribe(data => {this.updateForm.setValue(data);});
        console.log(+userId);
  }

  onSubmit(){
    this.createService.editUser(this.updateForm.value)
        .pipe(first())
        .subscribe(
          data =>{
            this.router.navigate(['liste-user']);
          },
         error => {
           alert(error);
         }
          
        );
  }

}
