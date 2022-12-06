import { EventEmitter } from '@angular/core';

export interface ModalConfigInterface {
  modalHeader: string;
  modalMessage: string;
  successClickHandlerData?: ClickHandlerDataInterface;
  positiveButtonText?: string;
  negativeButtonText?: string;
}

export interface ClickHandlerDataInterface {
  callback: (...args: any) => any;
  callbackArgs?: any[];
}

// TODO: modal content factory

export interface OpenModal {
  openModalEvent: EventEmitter<ModalConfigInterface>;
  broadcastOpenModalEvent(modalConfig: ModalConfigInterface): void;
}
