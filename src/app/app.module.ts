import { FollowersService } from './services/followers-service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { SummaryPipe } from './summary.pipe';
import { CourseService } from './course/course.service';
import { CourseComponent } from './course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';




@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavouriteComponent,
    TitleCaseComponent,
    TitleCasePipe,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    PostService,
    FollowersService,
    {provide:ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
