import { Pipe, PipeTransform } from '@angular/core';

// ! DECLARATION: This is an Angular antipattern, only for educational purposes!

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    listToFilter: any[],
    inputValue: string,
    lookupKey?: string
  ): any[] {
    type ObjectKey = keyof typeof listToFilter;
    const resolvedKey = lookupKey ? (lookupKey as ObjectKey) : null;

    return listToFilter.filter((listItem) =>
      resolvedKey
        ? this.handleCompare(listItem[resolvedKey], inputValue)
        : this.handleCompare(listItem, inputValue)
    );
  }

  private handleCompare(sourceString: string, subString: string): boolean {
    return sourceString.toLowerCase().includes(subString);
  }
}
