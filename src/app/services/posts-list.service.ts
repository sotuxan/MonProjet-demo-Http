import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http, Response } from '@angular/http';
import { Ipost } from '../domain/ipost';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsListService {

  private URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: HttpClient) { }

  // getAllPosts(): Ipost[] {
  //   return [
  //     {id: 100, userId: 100, title: 'Title 100', body: 'Body 100'},
  //     {id: 200, userId: 200, title: 'Title 200', body: 'Body 200'},
  //     {id: 300, userId: 300, title: 'Title 300', body: 'Body 300'},
  //   ];
  // }

  getAllPosts(): Observable<Ipost[]> {
    return this._http.
        get<Ipost[]>(this.URL);
      //  map((response: Response) => <Ipost[]> response.json());
   }

}
