import { Routes } from '@angular/router';
import { admin } from './componenets/admin/admin';
import { DataBinding } from './componenets/data-binding/data-binding';
import { User } from './componenets/user/user';
import { Variables } from './componenets/variables/variables';
import { PageNotFound } from './componenets/page-not-found/page-not-found';
import { ControlFlow } from './componenets/control-flow/control-flow';
import { AttDir } from './componenets/att-dir/att-dir';

export const routes: Routes = [
  { path: '', redirectTo: 'dataBinding', pathMatch: 'full' },
  { path: 'admin', component: admin },
  { path: 'dataBinding', component: DataBinding },
  { path: 'user-page', component: User },
  { path: 'variables', component: Variables },
  { path: 'controlFlow', component: ControlFlow },
  { path: 'attDir', component: AttDir },
  { path: '**', component: PageNotFound },
];
