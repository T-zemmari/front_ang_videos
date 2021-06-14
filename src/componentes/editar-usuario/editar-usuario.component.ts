import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { NgForm } from '@angular/forms';
import { UserService } from '../../app/Services/user.service.';



@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
  providers: [UserService]


})
export class EditarUsuarioComponent implements OnInit {

  public page_title: string;
  public user: User;
  public status: string
  public identity;
  public token;

  constructor(private _userService: UserService) {

    // primer obtener el token del usuario 

    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();





    this.page_title = "Editar mis datos personales",

      this.user = new User(this.identity.sub,
        this.identity.name,
        this.identity.lastname,
        this.identity.email,
         "",
        "ROLE_USER", "");



  }


  onSubmit(form) {

    console.log(this.token,this.user)

 
      this._userService.update(this.token,this.user).subscribe(


        response => {

          if (response.Status == 'Success') {


           
           this.status = 'Success';
            form.reset();

          } else {
            this.status = 'error';
            console.log(response)
          }

        },

        error => {
          this.status = 'error';
          console.log(error)
        }
      )
    
    }



  

  ngOnInit(): void {
  }

}
