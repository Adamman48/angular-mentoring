import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    LogoComponent,
    ButtonComponent,
    SearchComponent,
    IconComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [LogoComponent, ButtonComponent, SearchComponent, IconComponent],
})
export class SharedModule {}
