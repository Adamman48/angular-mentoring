import { Pipe, PipeTransform } from '@angular/core';
import {
  CourseItemInterface,
  OrderEnum,
} from 'src/app/core/definitions/courses.feature';

// ! DECLARATION: This is an Angular antipattern, only for educational purposes!

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(
    courseItemsList: CourseItemInterface[],
    key: string,
    order?: OrderEnum
  ): CourseItemInterface[] {
    type ObjectKey = keyof typeof courseItemsList[0];
    const resolvedKey = key as ObjectKey;

    return courseItemsList.sort((a, b) => {
      return order === OrderEnum.ASCENDING
        ? this.handleSortData(a[resolvedKey], b[resolvedKey])
        : this.handleSortData(b[resolvedKey], a[resolvedKey]);
    });
  }

  private handleSortData(dataA: any, dataB: any): number {
    if (dataA instanceof Date) {
      return this.convertDateToEpoch(dataA) - this.convertDateToEpoch(dataB);
    } else if (typeof dataA === 'number') {
      return dataA - dataB;
    } else if (typeof dataA === 'string') {
      return dataA.localeCompare(dataB);
    } else {
      return 0;
    }
  }

  private convertDateToEpoch(dateString: Date): number {
    return Date.parse(dateString.toString());
  }
}
