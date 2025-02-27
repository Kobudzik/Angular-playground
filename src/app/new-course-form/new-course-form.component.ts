import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent{
  form;

  constructor(fb:FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],

      contact:fb.group({
        email:[],
        phone:[]
      }),
      
      topics:fb.array([])
    })
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic:HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value="";
  }

  removeTopic(topic: FormControl){
    let index= this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

 
}
