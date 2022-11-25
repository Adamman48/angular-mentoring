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

  ngOnInit() {
    console.log('ON INIT');
    this.courseItemsList = [
      {
        id: 'c1',
        title: 'Hitches',
        creationDate: new Date(),
        duration: 68,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 'c2',
        title: 'Meteorology',
        creationDate: new Date(),
        duration: 68,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 'c3',
        title: 'Beaufort scale',
        creationDate: new Date(),
        duration: 68,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ];
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
