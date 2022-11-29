import { Component } from '@angular/core';

@Component({
  selector: 'trng-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  inputValue = '';
  // TODO: Output the inputValue upon clicking button

  onButtonClick() {
    console.log(this.inputValue);
  }
}
