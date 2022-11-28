import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseItemInterface } from 'src/app/core/definitions/courses.feature';
import { IconLigaturesEnum } from 'src/app/core/definitions/icons.shared';

@Component({
  selector: 'trng-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent {
  readonly IconsEnum = IconLigaturesEnum;
  @Input() courseItemData!: CourseItemInterface;
  @Output() deleteItemEvent = new EventEmitter<string>();

  deleteItem(itemId: string): void {
    this.deleteItemEvent.emit(itemId);
  }

  convertMinutes(mins: number): string {
    return `${(mins / 60).toFixed()}h ${mins % 60}m`;
  }
}
