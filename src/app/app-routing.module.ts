import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user/user.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: ':id', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
