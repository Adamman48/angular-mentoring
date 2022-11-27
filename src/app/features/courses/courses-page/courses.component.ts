import { Component } from '@angular/core';
import { CourseItemInterface } from 'src/app/core/definitions/courses.feature';
import { IconLigaturesEnum } from 'src/app/core/definitions/icons.shared';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'trng-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [CoursesService],
})
export class CoursesComponent {
  readonly IconsEnum = IconLigaturesEnum;
  courseItemsList!: CourseItemInterface[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    console.log('ON INIT');
    this.courseItemsList = this.coursesService.coursesList;
  }

  removeItemById(itemId: string): void {
    this.courseItemsList = this.courseItemsList.filter(
      (item) => item.id !== itemId
    );
    console.log(`Remove ${itemId}`);
  }

  onClickMore(): void {
    console.log('load more');
  }

  trackByFn(index: number, item: CourseItemInterface): string {
    return item.id;
  }

  ngOnChanges() {
    console.log('ON_CHANGES');
  }

  ngDoCheck() {
    console.log('DO_CHECK');
  }

  ngAfterContentInit() {
    console.log('AFTER_CONTENT_INIT');
  }

  ngAfterContentChecked() {
    console.log('AFTER_CONTENT_CHECKED');
  }

  ngAfterViewInit() {
    console.log('AFTER_VIEW_INIT');
  }

  ngAfterViewChecked() {
    console.log('AFTER_VIEW_CHECKED');
  }

  ngOnDestroy() {
    console.log('ON_DESTROY');
  }
}
