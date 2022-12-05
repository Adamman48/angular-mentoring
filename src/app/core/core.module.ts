import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { IfAuthenticatedDirective } from './authentication/ifAuthenticated.directive';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ModalComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, FooterComponent, ModalComponent],
})
export class CoreModule {}
