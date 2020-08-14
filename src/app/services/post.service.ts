import { DataService } from './data.service';
import { Post } from './../posts/post.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostService extends DataService {
  constructor(_http:HttpClient) {
    super("http://jsonplaceholder.typicode.com/posts", _http);
  }
}
