import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { AppMaterialModules } from './material.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { CreateComponent } from './component/users/create/create.component';
import { DetailComponent } from './component/users/detail/detail.component';
import { HeaderComponent } from './shared/header/header.component';
import { AlertComponent } from './shared/alert/alert.component';
import { CreateService } from './services/create.service';
import { UserTabService } from './services/user-tab.ts.service';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { EditComponent } from './component/users/edit/edit.component';
import { AlertService } from './services/alert.service';


const appRoutes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'create-user',  component: CreateComponent},
  { path: 'liste-user',  component: UsersComponent},
  { path: 'edit-user/:id',  component: EditComponent},
]

@NgModule({
  declarations: [    
    AppComponent,
    UsersComponent,
    ProjectsComponent,
    CreateComponent,
    DetailComponent,
    HeaderComponent,
    EditComponent,
    AlertComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    AppMaterialModules,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CreateService,
              UserTabService,
              AlertService],
  bootstrap: [AppComponent],
  entryComponents: [ AlertComponent ]
})
export class AppModule { }
