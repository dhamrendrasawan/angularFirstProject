import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-employee1',
  standalone: true,
  imports: [],
  templateUrl: './employee1.component.html',
  styleUrl: './employee1.component.css'
})
export class Employee1Component {
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
