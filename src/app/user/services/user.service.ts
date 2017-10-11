import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API } from './../../app.api.definitions';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(`${API.domain}/users`)
      .map(res => res.json());
  }
}
