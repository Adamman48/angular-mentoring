import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[trngCourseBorderByCreation]',
})
export class CourseBorderByCreationDirective implements OnInit {
  @Input('trngCourseBorderByCreation') creationDate!: Date;
  // TODO: add class instead of style maybe
  @HostBinding('style.borderColor') borderColor!: string;
  // ! could use Renderer2 or ElementRef as well

  ngOnInit(): void {
    this.setBorderColor(this.creationDate);
  }

  private setBorderColor(creationDate: Date): void {
    const currentDateInEpoch: number = Date.now();
    const creationDateInEpoch: number = Date.parse(creationDate.toString());
    const twoWeeksInMs = 1209600000;
    const isReleased = creationDateInEpoch < currentDateInEpoch;
    const isNew = creationDateInEpoch >= currentDateInEpoch - twoWeeksInMs;

    if (isReleased && isNew) {
      this.borderColor = '#67a300';
    } else if (!isReleased) {
      this.borderColor = '#019ecc';
    }
  }
}
