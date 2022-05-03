import { Injectable } from '@angular/core';
import { MessageToastService } from '@fundamental-ngx/core/message-toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageToastService: MessageToastService) {}

  open(value: string): void {
    this.messageToastService.open(value, {
      duration: 5000,
    });
  }
}
