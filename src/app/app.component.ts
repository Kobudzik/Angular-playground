import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  post= {
    title: "Title",
    isFavourite: true
  }
  tweet= {
    likesCount:0,
    isLiked: false
  }

  courses=[];

  viewMode='map';

  onFavouriteChanged(eventArgs){
    console.log("Favourite changed." , eventArgs);
  }

  loadCourses(){
    this.courses=[
      {id:1, name:'course1'},
      {id:2, name:'course3'},
      {id:2, name:'course3'},
    ];
  }



  trackCourse(index, course){
    return course ? course.id : undefined;

  }
}
