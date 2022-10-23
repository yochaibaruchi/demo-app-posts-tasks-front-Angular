import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpUtilsService {
  constructor(private http: HttpClient) {}

  getUsers(url: string) {
    return this.http.get(url);
  }

  getUser(url: string, id: any) {
    return this.http.get(url + '/' + id);
  }

  addUser(url: string, obj: any) {
    return this.http.post(url, obj);
  }

  updateUser(url: string, id: any, obj: any) {
    return this.http.put(url + '/' + id, obj);
  }
  deleteUser(id: any, url: string) {
    return this.http.delete(url + '/' + id);
  }
}
