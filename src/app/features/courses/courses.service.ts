import { Injectable } from '@angular/core';
import { CourseItemInterface } from 'src/app/core/definitions/courses.feature';

@Injectable()
export class CoursesService {
  private coursesList: Map<string, CourseItemInterface> = new Map()
    .set('c1', {
      isTopRated: true,
      id: 'c1',
      title: 'Hitches',
      creationDate: new Date(2022, 10, 28),
      duration: 69,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    })
    .set('c2', {
      id: 'c2',
      title: 'Meteorology',
      creationDate: new Date(2022, 9, 16),
      duration: 420,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    })
    .set('c3', {
      id: 'c3',
      title: 'Beaufort scale',
      creationDate: new Date(2022, 11, 5),
      duration: 59,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    });

  getCourses(): CourseItemInterface[] {
    return [...this.coursesList.values()];
  }

  // ! can be used to add and update as well, hence no update is implemented yet
  /* setCourse(courseItem: CourseItemInterface): CourseItemInterface[] {
    this.coursesList.set(courseItem.id, courseItem);
    return this.getCourses();
  }

  getCourseById(itemId: string): CourseItemInterface | never {
    const courseItem = this.coursesList.get(itemId);

    if(courseItem) {
      return JSON.parse(JSON.stringify(courseItem));
    } else {
      throw new Error('Cannot get course');
    }
  }

  removeCourseById(itemId: string): boolean {
    return this.coursesList.delete(itemId);
  } */
}
