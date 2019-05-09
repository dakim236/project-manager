import {EbRole} from './role';

export class eb_user {
    id: number;
    nom: string;
    prenom: string;
    tel: string;
    mail: string;
    domaine: string;
    x_eb_role : EbRole;


    constructor(){
        this.id = null;
        this.nom = '';
        this.prenom = '';
        this.tel = '';
        this.mail = '';
        this.domaine= null;
        this.x_eb_role = null;
    }
    
}


