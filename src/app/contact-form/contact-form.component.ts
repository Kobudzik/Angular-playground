import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods=[
    {id:1, name: "E-mail"},
    {id:2, name: "Phone"},
    {id:3, name: "Letter"},
  ]

  sexOptions=[
    {id:0, name: "female"},
    {id:1, name: "male"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
