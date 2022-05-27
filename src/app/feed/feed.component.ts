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
      "usuario": "@SrBigotes",
      "src": "assets/gatito.jpeg",
      "caption": "Un gatito"
    },
    {
      "usuario": "@SrGorro",
      "src": "assets/gates.jpeg",
      "caption": "Que hace.."
    },
  ]

}
