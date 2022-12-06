import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses-page/courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormatDurationPipe } from './course-item/format-duration.pipe';
import { OrderByPipe } from './courses-page/order-by.pipe';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent,
    FormatDurationPipe,
    OrderByPipe,
  ],
  imports: [CommonModule, SharedModule, DirectivesModule],
})
export class CoursesModule {}
