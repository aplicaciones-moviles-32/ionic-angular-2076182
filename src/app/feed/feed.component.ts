import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  perrillos = [
    {
      "usuario": "@SrQuesadiila",
      "src": "assets/descarga.jpeg",
      "caption": "Kiubo qu hace...."
    },
    {
      "usuario": "@SrTostadora",
      "src": "assets/gates.jpeg",
      "caption": "holaaaaaa"
    },
  ]

}
