import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration',
})
export class FormatDurationPipe implements PipeTransform {
  transform(durationInMins: number): string {
    const minsInHour = 60;
    const durationTotalHours = Math.floor(durationInMins / minsInHour);
    const remainderMins = durationInMins % minsInHour;
    const hours =
      durationTotalHours > 0
        ? `${durationTotalHours}h${remainderMins ? ' ' : ''}`
        : '';
    const minutes = remainderMins ? `${remainderMins}m` : '';

    return hours + minutes;
  }
}
