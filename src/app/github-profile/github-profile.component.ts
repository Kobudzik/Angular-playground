import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    let id2= this.route.snapshot.paramMap.get('id');
    console.log("Snapshot " + id2);

    this.route.paramMap //jesli uzytkownik moze wrocic na ta sama strone z tej samej strony
        .subscribe(params => {
          console.log(params);
          let id= +params.get('id'); //+ converts to number
          console.log(id);
        })
  }

  submit(){
    this.router.navigate(['/followers'], {
      queryParams:{page:1, order:'newest'}
    });;
  }

}
