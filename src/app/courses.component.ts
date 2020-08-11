import { AuthorService } from './course/courses.service';
import {Component} from '@angular/core';

@Component({
    selector:'authors',
    template:`
    <h2>{{authors.length + title}}</h2>
    <ul>
        <li *ngFor="let author of authors">
        {{author}}
        </li>
    </ul>
    `
})

export class CoursesComponent{
    title= "List of Authors";
    authors;

    constructor(service:AuthorService) {
        this.authors=service.getAuthors();        
    }
}