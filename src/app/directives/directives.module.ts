import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfAuthenticatedDirective } from './ifAuthenticated.directive';

@NgModule({
  declarations: [IfAuthenticatedDirective],
  imports: [CommonModule],
  exports: [IfAuthenticatedDirective],
})
export class DirectivesModule {}
