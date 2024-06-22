import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-employee3',
  standalone: true,
  imports: [],
  templateUrl: './employee3.component.html',
  styleUrl: './employee3.component.css'
})
export class Employee3Component {
  constructor(private messageService: MessageService) {
  }
  addMsg(msg: string) {
    this.messageService.sendMessage(msg);
  }
  clearMsg(){
    this.messageService.clearMessages();
  }

}
