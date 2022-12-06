import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfAuthenticatedDirective } from './ifAuthenticated.directive';
import { CourseBorderByCreationDirective } from './course-border.directive';

@NgModule({
  declarations: [IfAuthenticatedDirective, CourseBorderByCreationDirective],
  imports: [CommonModule],
  exports: [IfAuthenticatedDirective, CourseBorderByCreationDirective],
})
export class DirectivesModule {}
