import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  liste = [
    {
      nom : "Yedagne",
      prenom : "Anicet"
    },
    {
      nom : "Yedagne",
      prenom : "Anicet"
    },{
      nom : "Yedagne",
      prenom : "Anicet"
    },{
      nom : "Yedagne",
      prenom : "Anicet"
    },
  ]
  constructor() { }

  getListe(){
    return this.liste
  }

}
