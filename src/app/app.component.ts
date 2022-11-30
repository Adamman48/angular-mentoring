import { Component } from '@angular/core';
import { ModalConfigInterface } from './core/definitions/modal.core';

@Component({
  selector: 'trng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isModalOpened = true;
  dummyModalConfig: ModalConfigInterface = {
    modalHeader: 'Delete course?',
    modalMessage: 'Are you sure you want to delete XY?',
    positiveButtonText: 'Yes, delete',
    successClickHandlerData: {
      callback: (x, y) => console.log('Log this: ' + x + y),
      callbackArgs: ['It is alive!', 'ALIVE!'],
    },
  };

  handleCloseModalEvent(isOpened: boolean): void {
    this.isModalOpened = isOpened;
  }
  // TODO: handle modal isOpened here
}
