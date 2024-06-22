import { Component } from '@angular/core';
import { SubjectServiceTodoService } from '../../services/subject-service-todo.service';

@Component({
  selector: 'app-subject-to-do-add',
  standalone: true,
  imports: [],
  templateUrl: './subject-to-do-add.component.html',
  styleUrl: './subject-to-do-add.component.css'
})
export class SubjectToDoAddComponent {
  constructor(private todoService: SubjectServiceTodoService) {

  }
  addTodo(id: any, text: any, isCompleted: any) {
    const newTodo = {
      id: id,
      text: text,
      isCompleted: true
    }
    this.todoService.addTodo(newTodo);
  }

}
