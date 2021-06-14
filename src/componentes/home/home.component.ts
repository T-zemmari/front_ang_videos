import { Component, OnInit ,DoCheck} from '@angular/core';
import { UserService } from '../../app/Services/user.service.';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  public page_title: string;
  public identity;
  public token;

  constructor(private _userService: UserService) {
    this.page_title = "Inicio"
    
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.loadService();

  }


  loadService() {

    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

}
