import { Component } from '@angular/core';
import { CourseItemInterface } from 'src/app/core/definitions/courses.feature';

@Component({
  selector: 'trng-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements CourseItemInterface {
  id = 'staticId';
  title = 'static title';
  creationDate: Date = new Date();
  duration = 60;
  description = 'static description';
}
