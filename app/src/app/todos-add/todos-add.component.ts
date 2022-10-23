import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpUtilsService } from '../service/http-utils.service';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.css'],
})
export class TodosAddComponent implements OnInit {
  constructor(
    private ar: ActivatedRoute,
    private http: HttpUtilsService,
    private router: Router,
    private DT: DataService
  ) {}
  sub: Subscription = new Subscription();
  sub1: Subscription = new Subscription();
  sub3: Subscription = new Subscription();
  userId: string = '';
  Name: string = '';
  url: string = 'http://localhost:2300/api/users';
  user: any;
  posts: any[] = [];
  obj: any = { title: '', Completed: false };

  addTask(isValid: boolean | null) {
    if (isValid) {
      this.user.Tasks.push(this.obj);
      this.sub3 = this.http
        .updateUser(this.url, this.userId, this.user)
        .subscribe(() => {
          this.DT.setPersonAndTask(this.userId);
          this.router.navigate(['/user', this.userId]);
        });
    }
  }

  cancel(): void {
    this.router.navigate(['/user', this.userId]);
  }

  ngOnInit(): void {
    this.sub = this.ar.params.subscribe((allParams: any) => {
      this.userId = allParams.id;
      this.sub1 = this.http.getUser(this.url, this.userId).subscribe((data) => {
        this.user = data;
        this.Name = this.user.Name;
        this.posts = this.user.Posts;
      });
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub3.unsubscribe();
  }
}
