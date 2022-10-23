import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: Subject<any> = new Subject<any>();
  data1: Subject<any> = new Subject<any>();
  constructor() {}

  setData(data: any): void {
    this.data.next(data);
  }
  setPersonAndTask(data: any): void {
    this.data1.next(data);
  }

  getData(): any {
    return this.data;
  }
  getPersonAndTaks(): any {
    return this.data1;
  }
}
