import { Post } from './post.model';
import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { passwordValidators } from './../change-password/passoword.validators';
import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators'
 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts:any=[];

  constructor(private _service:PostService){
  }

  ngOnInit(){
    this._service.getAll()
    .subscribe(
      posts=> {
        this.posts=posts,
        console.log(this.posts);
    },
    (error:AppError)=>{
      if(error instanceof NotFoundError)
      {
        //my defined error
        alert("Not found- error dialog from component (error is instance of not found error");
      }
      else {
        //global error
        throw error;
      }
    })
  }


  createPost(input:HTMLInputElement){
    let post = {title : input.value};
    this.posts.splice(0,0,post);

    input.value ='';

    this._service.create(post )
    .subscribe(
        response=> {
          post['id'] = response.id;
          console.log(response);
        },
        (error:AppError)=>{
          if(error instanceof BadInputError)
          {
            alert("400 error inside component!!");
            console.log("error inside component= " + error);
          }          
          alert("Error inside component!");
          console.log("error inside component= " + error);  
          throw error;
        }
    )
  }

  updatePost(post){
    this._service.update(post)
      .subscribe(
        data=>{
          console.log(data);  
      },
      (error:AppError)=>{
        if(error instanceof BadInputError)
        {
          alert("400 error inside component!!");
          console.log("error inside component= " + error);
        }
        alert("Error inside component!");
        console.log("error inside component= " + error);  
      })
    }

    deletePost(post){
      let index=this.posts.indexOf(post);
      this.posts.splice(index,1);

      this._service.delete(post.id)
      .subscribe(
        null,
        (error:AppError)=>{
          if(error instanceof NotFoundError)
          {
            alert("404 error inside component!!");
            console.log("error inside component= " + error);
          }
          alert("Error inside component!");
          console.log("error inside component= " + error);
          this.posts.splice(index,0 , post);
          console.log("error");
        }
      )
    }
}

