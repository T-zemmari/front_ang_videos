import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  public page_title: string;

  constructor() { 

    this.page_title= "Editar mis datos personales"
  }

  ngOnInit(): void {
  }

}
