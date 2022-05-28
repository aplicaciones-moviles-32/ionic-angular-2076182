import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarPublicacion();
  }

  publicacion = this.ruta.snapshot.params['id'];

  //BD
  publicaciones = [{
        "usuario": "@SrS",
        "imagen": "../assets/imagenes/1.jpeg",
        "caption": "holaa",
        "comentario": "", 
        "id": "01"
    },
    {
        "usuario": "@SrPato",
        "imagen": "../assets/imagenes/2.jpeg",
        "caption": "miau",
        "comentario": "", 
        "id": "02"
    },
    {
        "usuario": "@SrKevin",
        "imagen": "../assets/imagenes/3.jpeg",
        "caption": "miaux2",
        "comentario": "", 
        "id": "03"
    }
];

  publicacionDetalle: any= {}

  buscarPublicacion(): any {
    for(let i = 0; i < this.publicaciones.length; i++) {
      if(this.publicaciones[i].id == this.publicacion) {
        this.publicacionDetalle = this.publicaciones[i];
      }
    }
    return this.publicacionDetalle;
  }


}
