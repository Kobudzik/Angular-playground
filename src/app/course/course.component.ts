import { CourseService } from './course.service';
import {Component} from '@angular/core';

@Component({
    selector:'course',
    template:
    `
        <h2>{{courses.length +" " + title}}</h2>
        
        Click to display event to console
        <button class="btn btn-primary" [class.active]="isActive" (click)="onClick($event)">Button</button>
        <br/>
        Summary pipe: 
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
    onClick($event)
    {
        $event.stopPropagation();
        console.log("button was clicked!", $event);
    }

}