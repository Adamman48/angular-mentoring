import {
  Component,
  DoCheck,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  CourseItemInterface,
  OrderEnum,
} from 'src/app/core/definitions/courses.feature';
import { IconLigaturesEnum } from 'src/app/core/definitions/icons.shared';
import {
  ModalConfigInterface,
  OpenModal,
} from 'src/app/core/definitions/modal.core';
import { SearchFilterPipe } from 'src/app/shared/components/search/search-filter.pipe';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'trng-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [CoursesService, SearchFilterPipe],
})
export class CoursesComponent implements OnInit, DoCheck, OpenModal {
  readonly IconsEnum = IconLigaturesEnum;
  readonly OrderByEnum = OrderEnum;
  currentCourseItemsList!: CourseItemInterface[];
  private courseItemsList!: CourseItemInterface[];
  searchInputValue = '';
  @Output() openModalEvent = new EventEmitter<ModalConfigInterface>();

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
    this.broadcastOpenModalEvent({
      modalHeader: 'Delete course?',
      modalMessage: `Are you sure you want to delete\n${
        this.coursesService.getCourseById(itemId).title
      }`,
      positiveButtonText: 'Yes, delete',
      successClickHandlerData: {
        callback: () => {
          const newCoursesList = this.coursesService.removeCourseById(itemId);
          this.courseItemsList = newCoursesList;
        },
        callbackArgs: [this.coursesService, this.courseItemsList],
      },
    });
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

  broadcastOpenModalEvent(modalConfig: ModalConfigInterface): void {
    this.openModalEvent.emit(modalConfig);
  }

  trackByFn(index: number, item: CourseItemInterface): string {
    return item.id;
  }
}
