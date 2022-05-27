import { Component } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Insta';
  total= 90;

  esCierto = true;

  imagenes = [
    "assets/1.jpeg",
    "assets/2.jpeg",
    "assets/3.jpeg",
    "assets/4.jpeg",
    "assets/5.jpeg"
  ];

  perfil = true;

  togglePerfil(): void {
    this.perfil = !this.perfil;
  }


  
}
