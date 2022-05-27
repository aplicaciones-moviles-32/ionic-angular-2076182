import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdServiceService {

  constructor(private http: HttpClient) { }

  //get
  getpub(): any{
   return  this.http.get('https://insta-base-2076182-default-rtdb.firebaseio.com/publicaciones.json');
  }
  getus(): any{
    return this.http.get('https://insta-base-2076182-default-rtdb.firebaseio.com/usuario.json');
  }
  getpubus(): any{
    return this.http.get('https://insta-base-2076182-default-rtdb.firebaseio.com/usuario/publicaciones.json')
}

//post

//
}
