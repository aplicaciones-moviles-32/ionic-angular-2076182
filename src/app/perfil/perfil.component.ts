import { Component, OnInit, Input } from '@angular/core';
///import { Input } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  usuario = {
    "nombre": "SrBigotes", 
    "usuario": "@SrBigotes", 
    "descripcion": "miau", 
    "followers": 34324, 
    "following": 1, 
    "posts": 123 ,
    "fotodeperfil": "assets/gatos11.jpeg"
  }

  editando = false;

  toggleEditar(): void {
    this.editando = !this.editando;
  }

  @Input() bio: string = "";

  guardarBio(): void {
    this.usuario.descripcion = this.bio;
  }  
}
