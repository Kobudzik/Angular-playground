import { PasswordValidators } from './passoword.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent{
  form;

  constructor(fb:FormBuilder)
  {
    this.form = fb.group({
      oldPassword:['',
      Validators.required,
      PasswordValidators.invalidOldPassword
      ],
      
      newPassword:['', Validators.required],
      
      confirmPassword:['', Validators.required],
    },{
      //form validator
      validator:PasswordValidators.passwordsShouldMatch
    });  
  }

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }
}
