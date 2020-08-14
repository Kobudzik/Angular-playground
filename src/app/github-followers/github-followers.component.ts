import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers-service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any=[];

  constructor(private _service:FollowersService) { }

  ngOnInit(): void {
    this._service.getAll()
    .subscribe(
      data=> {
        this.followers=data,
        console.log(this.followers);
  })
}
}
