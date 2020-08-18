import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any=[];

  constructor(
    private route: ActivatedRoute,
    private _service: FollowersService) {}

  ngOnInit(): void {
    var obs= combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
        switchMap(combined=> {
          let id= combined[0].get('id');
          let page= combined[1].get('page');
          return this._service.getAll();  
        })
      )
      .subscribe(followers=>this.followers=followers);    
  }
}