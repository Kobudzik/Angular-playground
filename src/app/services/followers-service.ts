import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FollowersService extends DataService {
  constructor(_http:HttpClient) {
    super("https://api.github.com/users/user/followers", _http);
  }
}
