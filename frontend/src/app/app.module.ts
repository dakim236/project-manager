import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { AppMaterialModules } from './material.module';
//import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { CreateComponent } from './component/users/create/create.component';
import { DetailComponent } from './component/users/detail/detail.component';
import { HeaderComponent } from './shared/header/header.component';
import { CreateService } from './services/create.service';
import { UserTabService } from './services/user-tab.ts.service';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { EditComponent } from './component/users/edit/edit.component';


const appRoutes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'create-user',  component: CreateComponent},
  { path: 'liste-user',  component: UsersComponent},
  { path: 'edit-user',  component: EditComponent},
]

@NgModule({
  declarations: [    
    AppComponent,
    UsersComponent,
    ProjectsComponent,
    CreateComponent,
    DetailComponent,
    HeaderComponent,
    EditComponent
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CreateService,
              UserTabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
