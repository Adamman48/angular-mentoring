import { Component, OnInit } from '@angular/core';
import {
  CourseItemInterface,
  OrderEnum,
} from 'src/app/core/definitions/courses.feature';
import { IconLigaturesEnum } from 'src/app/core/definitions/icons.shared';
import { SearchFilterPipe } from 'src/app/shared/components/search/search-filter.pipe';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'trng-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [CoursesService, SearchFilterPipe],
})
export class CoursesComponent implements OnInit {
  readonly IconsEnum = IconLigaturesEnum;
  readonly OrderByEnum = OrderEnum;
  currentCourseItemsList!: CourseItemInterface[];
  private courseItemsList!: CourseItemInterface[];

  constructor(
    private coursesService: CoursesService,
    private searchPipe: SearchFilterPipe
  ) {}

  ngOnInit() {
    this.courseItemsList = this.coursesService.coursesList;
    this.currentCourseItemsList = this.coursesService.coursesList;
  }

  removeItemById(itemId: string): void {
    this.currentCourseItemsList = this.currentCourseItemsList.filter(
      (item) => item.id !== itemId
    );
    console.log(`Remove ${itemId}`);
  }

  filterCoursesBySearchInput(inputValue: string): void {
    if (inputValue) {
      this.currentCourseItemsList = this.searchPipe.transform(
        this.courseItemsList,
        inputValue,
        'title'
      );
    } else {
      this.currentCourseItemsList = this.courseItemsList;
    }
  }

  onClickMore(): void {
    console.log('load more');
  }

  trackByFn(index: number, item: CourseItemInterface): string {
    return item.id;
  }
}
