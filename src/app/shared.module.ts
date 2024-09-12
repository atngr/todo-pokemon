import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {BuddyComponent} from "./components/buddy/buddy.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoTaskComponent} from "./components/todo-task/todo-task.component";

@NgModule({
  declarations: [
    BuddyComponent,
    TodoListComponent,
    TodoTaskComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BuddyComponent,
    TodoListComponent,
    TodoTaskComponent
  ]
})
export class SharedModule {
}
