import { Component, OnInit } from '@angular/core';
import { Task } from '../task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public taskList: Task[] = [];

  constructor() { }

  ngOnInit() {
  }

  addTask(taskTitle: string, taskDescrp: string) {
    let task = new Task(taskTitle, taskDescrp);
    this.taskList.push(task);
  }

  removeTask(taskTitle: string) {
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].title == taskTitle) {
        this.taskList.splice(i, 1);
      }
    }
  }

  taskCompleted(task: Task) {
    task.completed = true;
  }

  dragOverHandler(e: DragEvent) {
    e.preventDefault();
  }

  dropHandler(e: DragEvent) {
    e.preventDefault();

    var file = e.dataTransfer.files[0];
    var fr = new FileReader();

    fr.readAsText(file);

    fr.onload = () => {
      let listOfTasks = JSON.parse(fr.result as string).tasks;
      for (var taskNo in listOfTasks) {
        let task = new Task(listOfTasks[taskNo].title, listOfTasks[taskNo].description);
        this.taskList.push(task);
      }
    }
    


  }

}
