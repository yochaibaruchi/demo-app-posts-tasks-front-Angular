import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data-service.service';
import { HttpUtilsService } from '../service/http-utils.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  @Input()
  task: any;
  @Input()
  userFromfather: any;

  sub: Subscription = new Subscription();
  url: string = 'http://localhost:2300/api/users';
  index: number = 0;
  constructor(
    private http: HttpUtilsService,
    private router: Router,
    private DT: DataService
  ) {}

  markAsCompleted(): void {
    this.task.Completed = !this.task.Completed;
    this.index = this.userFromfather.Tasks.findIndex(
      (x: any) => x._id == this.task._id
    );
    this.userFromfather.Tasks[this.index] = this.task;
    this.sub = this.http
      .updateUser(this.url, this.userFromfather._id, this.userFromfather)
      .subscribe(() => {
        this.DT.setData(this.task);
        this.router.navigate(['/user', this.userFromfather._id]);
      });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
