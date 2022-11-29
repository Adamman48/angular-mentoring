import { Component, OnInit } from '@angular/core';
import {
  CourseItemInterface,
  OrderEnum,
} from 'src/app/core/definitions/courses.feature';
import { IconLigaturesEnum } from 'src/app/core/definitions/icons.shared';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'trng-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [CoursesService],
})
export class CoursesComponent implements OnInit {
  readonly IconsEnum = IconLigaturesEnum;
  readonly OrderByEnum = OrderEnum;
  courseItemsList!: CourseItemInterface[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courseItemsList = this.coursesService.coursesList;
  }

  removeItemById(itemId: string): void {
    this.courseItemsList = this.courseItemsList.filter(
      (item) => item.id !== itemId
    );
    console.log(`Remove ${itemId}`);
  }

  // TODO: Add search event handler

  onClickMore(): void {
    console.log('load more');
  }

  trackByFn(index: number, item: CourseItemInterface): string {
    return item.id;
  }
}
