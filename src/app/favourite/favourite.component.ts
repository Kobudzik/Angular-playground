import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent{
  @Input("is-favourite") isFavourite:boolean;
  //@Output() change = new EventEmitter();

  onClick()
  {
      this.isFavourite = !this.isFavourite;
      //this.change.emit({newValue:this.isFavourite});
  }

}
