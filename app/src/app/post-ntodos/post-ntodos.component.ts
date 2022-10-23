import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpUtilsService } from '../service/http-utils.service';

@Component({
  selector: 'app-post-ntodos',
  templateUrl: './post-ntodos.component.html',
  styleUrls: ['./post-ntodos.component.css'],
})
export class PostNtodosComponent implements OnInit {
  constructor(
    private http: HttpUtilsService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}
  url: string = 'http://localhost:2300/api/users';
  userId: string = '';
  user: any;
  sub: Subscription = new Subscription();
  sub1: Subscription = new Subscription();
  name: string | null = '';
  tasks: any[] | null = [];
  posts: any[] | null = [];

  moveToAddPost(): void {
    this.router.navigate(['AddPost', this.userId]);
  }
  moveToAddTask(): void {
    this.router.navigate(['AddTodos', this.userId]);
  }

  ngOnInit(): void {
    this.sub = this.ar.params.subscribe((allParams: any) => {
      this.userId = allParams.id;
      this.sub1 = this.http
        .getUser(this.url, this.userId)
        .subscribe((data: any) => {
          this.user = data;
          this.name = this.user.Name;
          this.tasks = this.user.Tasks;
          this.posts = this.user.Posts;
        });
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
  }
}
