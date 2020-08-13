import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent{
  courseList=[
    {id:1, name:'Angular'},
    {id:2, name:'MVC'},
    {id:2, name:'JS'},
  ];

  submit(course){
    console.log(course);
  }

}
