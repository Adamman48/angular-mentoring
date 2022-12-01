import { Component, EventEmitter } from '@angular/core';
import { ModalConfigInterface } from './core/definitions/modal.core';

@Component({
  selector: 'trng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthenticated = false;
  isModalOpened = false;
  modalConfig: ModalConfigInterface = {
    modalHeader: 'Choose outcome',
    modalMessage: '',
  };

  // TODO: handle isAuthenticated coming from the header

  subscribeToRouterActivate(componentRef: any) {
    if (componentRef?.openModalEvent instanceof EventEmitter) {
      componentRef.openModalEvent.subscribe(this.onOpenModalEvent.bind(this));
    }
  }

  private onOpenModalEvent(inputModalConfig: ModalConfigInterface) {
    this.modalConfig = inputModalConfig;
    this.isModalOpened = true;
  }

  onCloseModalEvent(): void {
    this.isModalOpened = false;
  }
}
