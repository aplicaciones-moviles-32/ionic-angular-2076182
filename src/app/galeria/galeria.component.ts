import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  galeria = true;

  mostrarGaleria(mostrarSiNo:  boolean) {
    this.galeria = mostrarSiNo;
  }

  usuario = {
    "nombre":"SrBigotes",
    "alias": "@SrBigotes",
    "fotoPerfil": "../assets/imagenes/gatos11.jpg",
    "seguidores": 100,
    "seguidos": 1,
    "bio": "buenos dias!", 
    "publicaciones": [ {
      "usuario": "@SrKevin",
      "imagen": "../assets/imagenes/1.jpeg",
      "caption": "holaa",
      "comentario": "", 
      "id": "01"
    },
    {
      "usuario": "@Srs",
      "imagen": "../assets/imagenes/2.jpeg",
      "caption": "miau",
      "comentario": "", 
      "id": "02"
    },
    {
      "usuario": "@Sr23",
      "imagen": "../assets/imagenes/3.jpeg",
      "caption": "miau x2.",
      "comentario": "", 
      "id": "03"
    }
    ]
  }

}
