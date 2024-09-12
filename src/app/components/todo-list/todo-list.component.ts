import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

  private tasks: Task[];
  private date: Date;


  constructor() {
    this.tasks = [];
    this.date = new Date();
  }

  ngOnInit(): void {
    console.log("TodoListComponent initialized.");
  }
}
