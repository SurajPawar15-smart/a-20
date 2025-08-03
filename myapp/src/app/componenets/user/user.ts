import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
  preserveWhitespaces: true,
})
export class User {
  userName: string = 'Suraj Pawar';
  userEmail: string = 'suraj@example.com';
  isLoggedIn: boolean = true;
  loginCount: number = 5;

  greetUser(): string {
    return `Welcome back, ${this.userName}!`;
  }
  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
  incrementLogin(): void {
    this.loginCount++;
  }
}
