import { Injectable } from '@angular/core';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
    console.log("in UsersService");
  }
  static users: User[] = [
    {
      id: '1',
      firstName: 'One',
      lastName: 'User',
      age: 10,
      login: 'oneuser',
      password: 'one****',
      isDeleted: true
    },
    {
      id: '2',
      firstName: 'Two',
      lastName: 'User',
      age: 20,
      login: 'twouser',
      password: 'two****',
      isDeleted: false
    },
    {
      id: '3',
      firstName: 'Three',
      lastName: 'User',
      age: 30,
      login: 'threeuser',
      password: 'thre****',
      isDeleted: false
    },
    {
      id: '4',
      firstName: 'Four',
      lastName: 'User',
      age: 40,
      login: 'fouruser',
      password: 'fou****',
      isDeleted: false
    },
    {
      id: '5',
      firstName: 'Five',
      lastName: 'User',
      age: 40,
      login: 'fiveuser',
      password: 'fiv****',
      isDeleted: false
    }
  ];

  static getActiveUsers(): User[] {
    return this.users.filter((user: User) => !user.isDeleted);
  }

  static getDeletedUsers(): User[] {
    return this.users.filter((user: User) => user.isDeleted);
  }


  static setActivation(id: string, isDeleted: boolean) {
    const userId = this.users.findIndex((user: User) => user.id === id);
    this.users[userId].isDeleted = isDeleted;
    console.log("service", this.users);
  }
}