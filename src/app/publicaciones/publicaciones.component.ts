import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  publicaciones = [
    {
      "id": "432dffds8", 
      "imagen": "assets/1.jpeg",

    }, 
    {
      "id": "432dffds8dlkfd", 
      "imagen": "assets/2.jpeg",

    }, 
    {
      "id": "3c", 
      "imagen": "assets/3.jpeg",

    }, 
    {
      "id": "2b", 
      "imagen": "assets/4.jpeg",

    }, 
    {
      "id": "1a", 
      "imagen": "assets/5.jpeg",

    }
  ]

}
