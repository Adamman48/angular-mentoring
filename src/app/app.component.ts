import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { ModalConfigInterface } from './core/definitions/modal.core';
import { CoursesComponent } from './features/courses/courses-page/courses.component';

@Component({
  selector: 'trng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isModalOpened = false;
  modalConfig: ModalConfigInterface = {
    modalHeader: 'Choose outcome',
    modalMessage: '',
  };

  subscribeToRouterActivate(componentRef: any) {
    if (componentRef?.openModalEvent) {
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
