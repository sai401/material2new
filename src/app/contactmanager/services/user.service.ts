import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { resolve } from 'q';

@Injectable()
export class UserService {
  private datastore: { users: User[] };
  private _users: BehaviorSubject<User[]>;

  constructor(private http: HttpClient) {
    this.datastore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }
  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get<User[]>(usersUrl)
      .subscribe(data => {
        this.datastore.users = data;
        this._users.next(Object.assign({}, this.datastore).users);
      }, error => {
        console.log(error);
      });
  }

  userId(id: number) {
    return this.datastore.users.find(x => x.id === id);
  }

  addUser(user: User): Promise<User> {
    return new Promise((resolver, reject) => {
      user.id = this.datastore.users.length + 1;
      this.datastore.users.push(user);
      resolver(user);
    });
  }


}
