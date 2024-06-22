import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-employee2',
  standalone: true,
  imports: [],
  templateUrl: './employee2.component.html',
  styleUrl: './employee2.component.css'
})
export class Employee2Component {

  messages: any[] = [];

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.getMessage().subscribe(message => {
      if(message){
        this.messages.push(message);
      }else{
        this.messages = [];
      }
    })
  }
}
