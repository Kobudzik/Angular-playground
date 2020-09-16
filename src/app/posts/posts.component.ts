import { Post } from './post.model';
import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { PasswordValidators } from './../change-password/passoword.validators';
import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any = [];

  constructor(private service: PostService){
  }

  ngOnInit(): void{
    this.service.getAll()
    .subscribe(
      data => {
        this.posts = data,
        console.log(this.posts);
    },
    (error: AppError) => {
      // custom app errors to seperate concerns
      if (error instanceof NotFoundError)
      {
        // my defined error
        alert('Not found- error dialog from component (error is instance of not found error');
      }
      else {
        // global error(AppErrorHandler.ts)
        throw error;
      }
    });
  }


  createPost(input: HTMLInputElement): void{
    let post = { title : input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
    .subscribe(
        response => {
          //post['id'] = response.id;
          console.log(response);
        },
        (error: AppError) => {
          if (error instanceof BadInputError)
          {
            alert('400 error inside component!!');
            console.log('error inside component= ' + error);
          }
          alert('Error inside component!');
          console.log('error inside component= ' + error);
          throw error;
        }
    );
  }

  updatePost(post){
    this.service.update(post)
      .subscribe(
        data => {
          console.log(data);
      },
      (error: AppError) => {
        if (error instanceof BadInputError)
        {
          alert('400 error inside component!!');
          console.log('error inside component= ' + error);
        }
        alert('Error inside component!');
        console.log('error inside component= ' + error);
      });
    }

    deletePost(post): void{
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);

      this.service.delete(post.id)
      .subscribe(
        null,
        (error: AppError) => {
          if (error instanceof NotFoundError)
          {
            alert('404 error inside component!!');
            console.log('error inside component= ' + error);
          }
          alert('Error inside component!');
          console.log('error inside component= ' + error);
          this.posts.splice(index, 0 , post);
          console.log('error');
        }
      );
    }
}

