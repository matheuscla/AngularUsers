import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API } from './../../app.api.definitions';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(`${API.domain}/users`)
      .map(res => res.json());
  }

  createUser(user) {
    return this.http.post(`${API.domain}/users`, user)
      .map(res => res.statusText)
      .toPromise();
  }
}
