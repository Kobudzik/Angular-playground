import { Post } from './../posts/post.model';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs'
import { catchError, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(
    private _apiUrl: string,
    private _http:HttpClient) {
  }

  httpOptions={
    headers: new HttpHeaders({
      'Content-type': "application/json"
    })
  }

  getAll(){
    return this._http.get(this._apiUrl)
      .pipe(
        catchError(this.handleError)
        )
  }

  create(resource){    
    return this._http.post(this._apiUrl, resource)//, JSON.stringify(resource),this.httpOptions)
      .pipe(
        catchError(this.handleError)
        );
  }

  update(resource){
    return this._http.patch(this._apiUrl + "/" + resource.id, {isRead:true}) // JSON.stringify({isRead:true}),this.httpOptions)
    .pipe(
      catchError(this.handleError)
      );
  }

  delete(id){
    return this._http.delete(this._apiUrl +"/" + id)
    .pipe(
      catchError(this.handleError)
      );
  }

  //my service expected error handler
  private handleError(errorResponse: HttpErrorResponse){
    if(errorResponse.status===404)
    {
      alert("DATA SERVICE HANDLE ERROR- ERROR- not found");
      return throwError(new NotFoundError);
    }
    if(errorResponse.status===400)
    {
      alert("DATA SERVICE HANDLE ERROR- ERROR- bad input");
      return throwError(new BadInputError);
    }
    alert("DATA SERVICE HANDLE ERROR- ERROR- App Error");
    return throwError(new AppError(errorResponse));
  }    
}
