import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-publicacion-feed',
  templateUrl: './publicacion-feed.component.html',
  styleUrls: ['./publicacion-feed.component.css']
})
export class PublicacionFeedComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  user = this.ruta.snapshot.params['user'];
  userPost: any = {};

  ngOnInit(): void {
      this.getUserPost(this.user);
  }

  perrillos = [
    {
      "usuario": "@unosperrillos",
      "src": "assets/gatos.jpeg",
      "caption": "unos perrillos...."
    },
    {
      "usuario": "@amsiedad",
      "src": "assets/descarga.jpeg",
      "caption": "me da amsiedad"
    }
  ];

  getUserPost(user: string): any{
      for(let i = 0; i < this.perrillos.length; i++){
        if(user == this.perrillos[i].usuario){
          this.userPost = this.perrillos[i];
        }
      }

      console.log(this.userPost);
      return this.userPost;
  }

}
