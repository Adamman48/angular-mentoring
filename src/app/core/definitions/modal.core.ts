export interface ModalConfigInterface {
  modalHeader: string;
  modalMessage: string;
  positiveButtonCb: (...args: any) => void;
  positiveButtonText?: string;
  negativeButtonText?: string;
}
