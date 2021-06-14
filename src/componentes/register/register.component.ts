import { Component, OnInit } from '@angular/core';
import { User} from '../../Models/User';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


   public page_title :string;
   public user :User;
  // public submitted = false;


     constructor() {

    this.page_title="Registro";
    this.user = new User(1,"","","","","ROLE_USER","");
    
    
   }
   onSubmit(it: NgForm) {
    console.log(it.value);  // { first: '', last: '' }
    console.log(it.valid);  // false
  }



   

  ngOnInit(): void {

    console.log(this.user);
  }

}
