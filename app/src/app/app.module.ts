import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmpslistComponent } from './empslist/empslist.component';
import { EmpsComponent } from './emps/emps.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ImgeComponent } from './imge/imge.component';
import { PostNtodosComponent } from './post-ntodos/post-ntodos.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { TodosAddComponent } from './todos-add/todos-add.component';
import { PostsAddComponent } from './posts-add/posts-add.component';
import { AddPersonComponent } from './add-person/add-person.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpslistComponent,
    EmpsComponent,
    ImgeComponent,
    PostNtodosComponent,
    PostsComponent,
    TodosComponent,
    TodosAddComponent,
    PostsAddComponent,
    AddPersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
