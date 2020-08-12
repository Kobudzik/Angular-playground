import { CourseService } from './course.service';
import {Component} from '@angular/core';

@Component({
    selector:'courses',
    template:`
    <h2>{{courses.length + title}}</h2>
 
    <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Button</button>
    <p>{{text | summary}}</p>
    `
})

export class CourseComponent
{    
    courses;

    constructor(service:CourseService) {
        this.courses=service.getCourses();        
    }

    title= "List of Courses";    
    isActive=true;
    text="Text, text, text, text, text, text, text, text, text, ext, text, text, text, ext, text, text, text, ext, text, text, text, ext, text, text, text, ext, text, text, text, ext, text, text, text, ext, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text";
    onSave($event)
    {
        $event.stopPropagation();
        console.log("button was clicked!", $event);
    }

}