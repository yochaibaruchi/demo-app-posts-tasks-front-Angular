import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgeComponent } from './imge/imge.component';
import { PostNtodosComponent } from './post-ntodos/post-ntodos.component';
import { PostsAddComponent } from './posts-add/posts-add.component';
import { TodosAddComponent } from './todos-add/todos-add.component';
import { AddPersonComponent } from './add-person/add-person.component';
const routes: Routes = [
  { path: '', component: ImgeComponent },
  { path: 'user/:id', component: PostNtodosComponent },
  { path: 'AddTodos/:id', component: TodosAddComponent },
  { path: 'AddPost/:id', component: PostsAddComponent },
  { path: 'AddPerson', component: AddPersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
