export class Task {
    public title: string;
    public description: string;
    public completed: boolean;

    constructor(taskTitle: string, taskDescription: string) {
        this.title = taskTitle;
        this.description = taskDescription;
        this.completed = false;
    }

}