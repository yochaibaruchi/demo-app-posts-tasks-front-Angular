import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpUtilsService } from '../service/http-utils.service';
import { DataService } from '../service/data-service.service';
@Component({
  selector: 'app-empslist',
  templateUrl: './empslist.component.html',
  styleUrls: ['./empslist.component.css'],
})
export class EmpslistComponent implements OnInit {
  constructor(
    private http: HttpUtilsService,
    private elementRef: ElementRef,
    private router: Router,
    private TD: DataService
  ) {}
  sub: Subscription = new Subscription();
  sub2: Subscription = new Subscription();
  sub3: Subscription = new Subscription();
  sub4: Subscription = new Subscription();
  users: any = [];
  result: any[] = [];
  clickedUserId: string = '';

  search(value: string | null): void {
    this.result = this.users.filter(
      (x: any) => x.Name.startsWith(value) || x.email.startsWith(value)
    );
  }

  dataFromChild(id: string): void {
    this.clickedUserId = id;
  }

  addPerson(): void {
    this.router.navigate(['/AddPerson']);
  }
  modifyListView(id: string): void {
    let index = this.result.findIndex((x) => x._id == id);
    this.result.splice(index, 1);
  }

  ngOnInit(): void {
    this.sub = this.http
      .getUsers('http://localhost:2300/api/users')
      .subscribe((data: any) => {
        this.users = data;
        this.result = this.users;
        this.sub3 = this.TD.getPersonAndTaks().subscribe((person: any) => {
          this.sub4 = this.http
            .getUsers('http://localhost:2300/api/users')
            .subscribe((data: any) => {
              this.users = data;
              this.result = this.users;
            });
        });
        this.sub2 = this.TD.getData().subscribe((Response: any) => {
          this.result.forEach((person: any) => {
            person.Tasks.forEach((task: any) => {
              if (task._id == Response._id) {
                task.Completed = true;
              }
            });
          });
        });
      });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    this.sub4.unsubscribe();
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      'dimgrey';
  }
}
