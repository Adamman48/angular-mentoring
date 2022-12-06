import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ModalComponent],
  imports: [CommonModule, SharedModule, DirectivesModule],
  exports: [HeaderComponent, FooterComponent, ModalComponent],
})
export class CoreModule {}
