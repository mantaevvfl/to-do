import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do';
  taskList = [];

  addTask(taskName) {
    this.taskList.push(taskName)
  }
}
