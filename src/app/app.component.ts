import {
  Component,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AuthenticationService } from './core/authentication/authentication.service';
import { ModalConfigInterface } from './core/definitions/modal.core';

@Component({
  selector: 'trng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthenticationService],
})
export class AppComponent {
  isAuthenticated = false;
  isModalOpened = false;
  modalConfig: ModalConfigInterface = {
    modalHeader: 'Choose outcome',
    modalMessage: '',
  };

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.isAuthenticated = !!this.authService.getUserInfo();
  }

  subscribeToRouterActivate(componentRef: any): void {
    if (componentRef?.openModalEvent instanceof EventEmitter) {
      componentRef.openModalEvent.subscribe(this.onOpenModalEvent.bind(this));
    }
  }

  private onOpenModalEvent(inputModalConfig: ModalConfigInterface): void {
    this.modalConfig = inputModalConfig;
    this.isModalOpened = true;
  }

  onCloseModalEvent(): void {
    this.isModalOpened = false;
  }
}
