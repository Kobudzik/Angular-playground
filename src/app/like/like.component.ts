import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{
  @Input() likesCount: number;
  @Input() isActive: boolean;

  onClick()
  {
    this.likesCount+=(this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
