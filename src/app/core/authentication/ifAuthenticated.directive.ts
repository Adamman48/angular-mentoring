import {
  Directive,
  Input,
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

  @Input() whatever = '';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    console.log(this.whatever);
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
