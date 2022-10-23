import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpUtilsService } from '../service/http-utils.service';
@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css'],
})
export class EmpsComponent implements OnInit {
  constructor(private http: HttpUtilsService, private router: Router) {}
  sub1: Subscription = new Subscription();
  sub: Subscription = new Subscription();
  flag: boolean = false;
  flag3: boolean = false;
  @Output()
  dataToPerent: EventEmitter<any> = new EventEmitter();
  @Output()
  dataToPerent1: EventEmitter<any> = new EventEmitter();
  @Input()
  user: any = {};
  @Input()
  clickedUserId: string = '';

  userName: string | undefined = '';
  userEmail: string | undefined = '';
  userStreet: string | undefined = '';
  userCity: string | undefined = '';
  userZipcode: number | undefined = 0;
  url: string = 'http://localhost:2300/api/users';
  flagChange(): void {
    this.flag = true;
  }
  close(): void {
    this.flag = false;
  }

  changecolor(): boolean {
    if (this.user.Tasks.every((task: any) => task.Completed == true)) {
      return true;
    } else {
      return false;
    }
  }

  update(isValid: boolean | null): void {
    if (isValid) {
      let obj = {
        _id: this.user._id,
        Name: this.userName,
        email: this.userEmail,
        street: this.userStreet,
        City: this.userCity,
        Zipcode: this.userZipcode,
        Tasks: this.user.Tasks,
        Posts: this.user.Posts,
      };
      this.sub = this.http
        .updateUser(this.url, this.user._id, obj)
        .subscribe(() => {});
      this.close();
    }
  }
  delete() {
    this.sub1 = this.http.deleteUser(this.user._id, this.url).subscribe(() => {
      this.router.navigate(['']);
      this.dataToPerent1.emit(this.user._id);
    });
  }

  dataUp(): void {
    this.dataToPerent.emit(this.user._id);
    this.router.navigate(['/user', this.user._id]);
  }

  ngOnInit(): void {
    this.userEmail = this.user.email;
    this.userName = this.user.Name;
    this.userStreet = this.user.street;
    this.userCity = this.user.City;
    this.userZipcode = this.user.Zipcode;
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
  }
}
