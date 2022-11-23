import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses-page/courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CoursesComponent, CourseItemComponent],
  imports: [CommonModule, SharedModule],
})
export class CoursesModule {}
