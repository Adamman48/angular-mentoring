import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'trng-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  inputValue = '';
  @Output() inputChangeEvent = new EventEmitter<string>();

  onSearchButtonClick() {
    this.inputChangeEvent.emit(this.inputValue);
  }
}
