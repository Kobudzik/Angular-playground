import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable, throwError, observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url="http://jsonplaceholder.typicode.com/posts";

  constructor(private http:Http) {}

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post){
    return this.http.patch(this.url + "/" + post.id, JSON.stringify({isRead:true})).pipe(
      catchError((error:Response)=>{
        if(error.status===400){
          return Observable.throw(new BadInputError(error.json()));
        }
        return Observable.throw(new AppError(error.json()));
      })
    )
  }

  deletePost(id){
    return this.http.delete(this.url +"/" + id).pipe(
      catchError((error:Response)=>{
        if(error.status===404){
          return Observable.throw(new NotFoundError());
        }

        return Observable.throw(new AppError(error));
      })
    )
  };

    
}
