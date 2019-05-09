import { environment } from 'src/environments/environment';

export class Statique {
 // USER
 static CREATE_USER = 'http://localhost/project-manager/backend/web/app_dev.php/user/create';
 static USER_LIST = environment.urlBackEnd+'/user/liste';
 static EDIT_USER = environment.urlBackEnd+'/user/edit' ;
 static UPDATE_USER = environment.urlBackEnd+'/user/update';
 static ROLE_LIST = environment.urlBackEnd+'/user/showRole';
 static DELETE_USER = environment.urlBackEnd+'/user/remove';

 // PROJECT
}
