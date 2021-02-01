import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { NotificationTypes } from 'src/app/enums';

@Injectable()
export class NotificationService {
  public constructor(private messageService: MessageService) {}

  public notify(type: NotificationTypes, message: Message): void {
    message.severity = type.toString();
    this.messageService.add(message);
  }
}
