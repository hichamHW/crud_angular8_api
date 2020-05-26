import { Component, OnInit } from '@angular/core';
import {UserModule} from 'src/app/model/user/user.module';
import { NgForm } from '@angular/forms';
import {UserServiceService} from 'src/app/services/user-service.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  id_model:number;
  lengh:number;
  users :UserModule[]= this.US.getUser();;
  constructor( private US : UserServiceService) { }

  ngOnInit() {
    
    
    
  }

  
  user : UserModule = {
    id:null,
    name:null,
    departement:null,
    act:false
  
      
    };
  clickon(st:string){

    ///this.id_model="#"+st;
    
   


  }
  rest(u:NgForm){

    u.reset();
  }
  save(){
    
    
   this.US.setUser(this.user);

  }
  clickin(us:number){

    

  }
  delete (id_1 : number){


    




    } 


  }


