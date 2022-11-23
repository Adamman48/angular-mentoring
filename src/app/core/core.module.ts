import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, FooterComponent, PageComponent],
})
export class CoreModule {}
