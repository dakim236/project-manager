import {EbRole} from './role';

export class eb_user {
    id: number;
    nom: string;
    prenom: string;
    tel: string;
    mail: string;
    domaine: string;
    //client: eb_user[];
    x_eb_role : string;


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


