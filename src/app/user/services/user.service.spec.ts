import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {MockBackend} from "@angular/http/testing";
import {
  JsonpModule,
  Jsonp,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http,
  XHRBackend,
  HttpModule
} from "@angular/http";
import { UserService } from './user.service';
import { inject } from "@angular/core/testing";
import { async } from "@angular/core/testing";


describe('UserService', () => {
  let service: UserService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
      ],
      imports: [HttpModule]
    });
  });

  beforeEach(inject([UserService], s => {
    service = s;
  }));

  it('should returns a list of users', async(() => {
    service.getUsers().then(users => {
      expect(users).toBeDefined();
      expect(users.length).toBe(10);
    })
  }));

  it('should register an users', async(() => {
    const user = {
      'name': 'John',
      'username': 'John',
      'email': 'john@example.com' 
    };

    service.createUser(user).then(user => {
      expect(user).toBeTruthy();
      expect(user).toBe('OK');
      expect(user).toBeDefined();
    })
  }));
});

