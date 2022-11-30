import { Component, DoCheck, OnInit } from '@angular/core';
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
export class CoursesComponent implements OnInit, DoCheck {
  readonly IconsEnum = IconLigaturesEnum;
  readonly OrderByEnum = OrderEnum;
  currentCourseItemsList!: CourseItemInterface[];
  private courseItemsList!: CourseItemInterface[];
  searchInputValue = '';
  // TODO: output modal request

  constructor(
    private coursesService: CoursesService,
    private searchPipe: SearchFilterPipe
  ) {}

  ngOnInit() {
    this.courseItemsList = this.coursesService.getCourses();
    this.currentCourseItemsList = this.courseItemsList;
  }

  ngDoCheck() {
    const coursesList = this.coursesService.getCourses();
    if (this.searchInputValue) {
      this.filterCoursesBySearchInput(this.searchInputValue);
    } else {
      this.currentCourseItemsList = coursesList;
      this.courseItemsList = coursesList;
    }
  }

  removeItemById(itemId: string): void {
    const newCoursesList = this.coursesService.removeCourseById(itemId);
    this.courseItemsList = newCoursesList;

    console.log(`Remove ${itemId}`);
  }

  filterCoursesBySearchInput(inputValue: string): void {
    this.searchInputValue = inputValue;
    this.currentCourseItemsList = this.searchPipe.transform(
      this.courseItemsList,
      inputValue,
      'title'
    );
  }

  onClickMore(): void {
    console.log('load more');
  }

  trackByFn(index: number, item: CourseItemInterface): string {
    return item.id;
  }
}
