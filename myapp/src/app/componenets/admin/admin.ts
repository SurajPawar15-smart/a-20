import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  template: `
    <h1>Admin: {{ adminName }}</h1>
    <h1>Total Users: {{ totalUsers }}</h1>
    <h1>Welcome Message: {{ getWelcomeMessage() }}</h1>
  `,
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class admin {
  adminName: string = 'Admin Suraj';
  totalUsers: number = 134;
  lastLogin: string = '2025-08-02 08:15 AM';

  getWelcomeMessage(): string {
    return `Welcome ${this.adminName}, total users: ${this.totalUsers}`;
  }
}
