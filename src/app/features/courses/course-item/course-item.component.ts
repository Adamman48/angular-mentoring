import { Component, Input } from '@angular/core';
import { CourseItemInterface } from 'src/app/core/definitions/courses.feature';

@Component({
  selector: 'trng-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent {
  @Input() courseItemData: CourseItemInterface | null = null;
}
