import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [LogoComponent, ButtonComponent, SearchComponent],
  imports: [CommonModule],
  exports: [LogoComponent, ButtonComponent, SearchComponent],
})
export class SharedModule {}
