import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  toDoList = [];
  constructor() {
 
   }

  getToDoList() {
    return this.toDoList;
  }

  addTitle(title: string) {
    let uniqueId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    this.toDoList.push({
      id: uniqueId,
      title: title,
      isChecked: false
    });
  }

  checkOrUnCheckTitle(id: string, flag: boolean) {
    for(let i = 0; i<this.toDoList.length;i++){
      if(this.toDoList[i].id == id){
        this.toDoList[i].isChecked = flag;
      }
    }
  }

  removeTitle(id: string) {
    for(let i = 0; i<this.toDoList.length;i++){
      if(this.toDoList[i].id == id){
        this.toDoList.splice(i,1);
      }
    }
  }
}
