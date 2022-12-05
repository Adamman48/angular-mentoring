import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Directive({
  selector: '[trngIfAuthenticated]',
  providers: [AuthenticationService],
})
export class IfAuthenticatedDirective implements OnInit {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    const isAuthenticated = this.authService.getUserInfo() || null;
    if (isAuthenticated && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!isAuthenticated && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
