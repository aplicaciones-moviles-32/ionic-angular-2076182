import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private http: HttpClient, private db : BdServiceService) { }

  ngOnInit(): void {
    this.db.getpub().subscribe(res =>{
      console.log(res)
    })
  }
  
 getpubli(): any{
    
 }
 posts: any =[  ]

}
