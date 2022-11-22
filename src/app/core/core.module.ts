import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
import { CourseItemComponent } from '../features/courses/course-item/course-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageComponent,
    CourseItemComponent,
  ],
  imports: [CommonModule],
})
export class CoreModule {}
