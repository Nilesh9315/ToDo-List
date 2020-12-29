import { Component } from '@angular/core';
import { todo } from "./Todo";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  toDoValue:string;
  list:todo[];

  ngOnInit(){
    this.list=[];
    this.toDoValue='';

  }
  addItem(){
    if(this.toDoValue!=='') {
      const newItem: todo= {
      id: Date.now(),
      value: this.toDoValue,
      isDone: false
    };
    this.list.push(newItem);
    }
    this.toDoValue ="";
  }
deleteItem(id:number){
  this.list= this.list.filter(item=>item.id!=id);
}

}
