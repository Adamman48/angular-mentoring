import { Component } from '@angular/core';

@Component({
  selector: 'trng-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  inputValue = '';

  // TODO: use reusable button somehow
  onButtonClick() {
    console.log(this.inputValue);
  }
}
