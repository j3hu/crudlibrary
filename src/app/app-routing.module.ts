import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddLibroComponent} from "./libro/add-libro/add-libro.component";

const routes: Routes = [
  {path: 'list-books', redirectTo: '/', pathMatch: 'full'},
  {path: 'add-book', component: AddLibroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
