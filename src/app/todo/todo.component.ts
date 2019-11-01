import { Component, OnInit } from '@angular/core';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [],
  providers : [TodoService]
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];
  title :String= "To Do List App";
  constructor(private toDoService: TodoService) { }

  ngOnInit() {
   this.toDoListArray = this.toDoService.getToDoList();
  }

  onAdd(itemTitle) {
    this.toDoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }

  alterCheck(id: string,isChecked) {
    this.toDoService.checkOrUnCheckTitle(id,!isChecked);
  }

  onDelete(id : string){
    this.toDoService.removeTitle(id);
  }

}


