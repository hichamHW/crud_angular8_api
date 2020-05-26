import { Injectable } from '@angular/core';
import {UserModule} from 'src/app/model/user/user.module';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users : UserModule[]=[
    {"id" : 1,"name" : "hicham","departement":"MA","act":false},
    {"id" : 2,"name" : "yassine","departement":"Physique","act":true},
    {"id" : 3,"name" : "ayoub","departement":"communication","act":false},
    {"id" : 4,"name" : "adil","departement":"Science","act":false},
    {"id" : 5,"name" : "youness","departement":"MA","act":false},
    {"id" : 6,"name" : "driss","departement":"MA","act":false}
  ];

  constructor() { }

  getUser(){

    return this.users;
  }

  setUser(user : UserModule){

  this.users.push(user);


  }
}
