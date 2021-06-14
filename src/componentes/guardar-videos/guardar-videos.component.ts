import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guardar-videos',
  templateUrl: './guardar-videos.component.html',
  styleUrls: ['./guardar-videos.component.css']
})
export class GuardarVideosComponent implements OnInit {


  public page_title: string;

  constructor() {

    this.page_title = " Guardar Mis videos Favoritos"
   }

  ngOnInit(): void {
  }

}
