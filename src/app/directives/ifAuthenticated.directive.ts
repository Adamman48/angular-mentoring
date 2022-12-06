import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[trngIfAuthenticated]',
})
export class IfAuthenticatedDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set trngIfAuthenticated(inputBool: boolean) {
    if (inputBool && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!inputBool && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
