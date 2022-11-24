import { Component } from '@angular/core';
import { CourseItemInterface } from 'src/app/core/definitions/courses.feature';
import { IconLigaturesEnum } from 'src/app/core/definitions/icons.shared';

@Component({
  selector: 'trng-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  readonly IconsEnum = IconLigaturesEnum;
  courseItemsList: CourseItemInterface[] = [
    {
      id: 'staticId',
      title: 'static title',
      creationDate: new Date(),
      duration: 68,
      description: 'static description',
    },
  ];

  removeItemById(itemId: string) {
    /* this.courseItemsList = this.courseItemsList.filter(
      (item) => item.id !== itemId
    ); */
    console.log(`Remove ${itemId}`);
  }
}
