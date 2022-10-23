import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpUtilsService } from '../service/http-utils.service';

@Component({
  selector: 'app-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.css'],
})
export class PostsAddComponent implements OnInit {
  constructor(
    private ar: ActivatedRoute,
    private http: HttpUtilsService,
    private router: Router
  ) {}
  sub: Subscription = new Subscription();
  sub1: Subscription = new Subscription();
  sub3: Subscription = new Subscription();
  userId: string = '';
  url: string = 'http://localhost:2300/api/users';
  user: any;
  tasks: any[] = [];
  obj: any = { title: '', body: '' };

  ngOnInit(): void {
    this.sub = this.ar.params.subscribe((allParams: any) => {
      this.userId = allParams.id;
      this.sub1 = this.http.getUser(this.url, this.userId).subscribe((data) => {
        this.user = data;
        this.tasks = this.user.Tasks;
      });
    });
  }

  addpost(isValid: boolean | null): void {
    if (isValid) {
      this.user.Posts.push(this.obj);
      this.sub3 = this.http
        .updateUser(this.url, this.userId, this.user)
        .subscribe(() => {
          this.router.navigate(['/user', this.userId]);
        });
    }
  }

  cancel(): void {
    this.router.navigate(['/user', this.userId]);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub3.unsubscribe();
  }
}
