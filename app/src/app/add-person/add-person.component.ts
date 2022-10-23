import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data-service.service';
import { HttpUtilsService } from '../service/http-utils.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
  constructor(
    private http: HttpUtilsService,
    private router: Router,
    private DT: DataService
  ) {}
  sub: Subscription = new Subscription();
  url: string = 'http://localhost:2300/api/users';
  obj: any = {
    Name: '',
    email: '',
    street: '',
    City: '',
    Zipcode: '',
    Tasks: [],
    Posts: [],
  };

  addPerson(isValid: boolean | null) {
    if (isValid) {
      this.sub = this.http.addUser(this.url, this.obj).subscribe(() => {
        this.DT.setPersonAndTask(this.obj);
        this.router.navigate(['']);
      });
    }
  }

  back(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
