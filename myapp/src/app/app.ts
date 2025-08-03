import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from './componenets/user/user';
import { Variables } from './componenets/variables/variables';
import { admin } from './componenets/admin/admin';
import { DataBinding } from './componenets/data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, Variables, admin, DataBinding, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'myapp';
}
