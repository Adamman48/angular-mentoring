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
