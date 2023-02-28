import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TogoComponent } from './togo/togo.component';
import { TodoComponent } from './todo/todo.component';
import { TipsComponent } from './tips/tips.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main', component: HomeComponent },
  { path: 'togo', component: TogoComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'tips', component: TipsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
