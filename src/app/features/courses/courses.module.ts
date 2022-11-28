import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses-page/courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseBorderByCreationDirective } from './course-item/course-border.directive';
import { FormatDurationPipe } from './course-item/format-duration.pipe';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent,
    CourseBorderByCreationDirective,
    FormatDurationPipe,
  ],
  imports: [CommonModule, SharedModule],
})
export class CoursesModule {}
