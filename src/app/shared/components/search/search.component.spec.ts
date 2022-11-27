import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared.module';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let testInput: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule, SharedModule ],
      declarations: [ SearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;

    testInput = 'This is the way.';
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render input field and search button', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelector('input')).toBeTruthy();
    expect(compiled.querySelector('.btn-text').textContent).toBe('Search');
  });

  it('should update inputValue field according to input', fakeAsync(() => {
    fixture.detectChanges();
    let inputEl = fixture.debugElement.nativeElement.querySelector('input');
    inputEl.value = testInput;
    inputEl.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    expect(component.inputValue).toBe(testInput);
  }));

  it('should log input value upon clicking search button', fakeAsync(() => {
    spyOn(console, 'log');
    fixture.detectChanges();
    let inputEl = fixture.debugElement.nativeElement.querySelector('input');
    inputEl.value = testInput;
    inputEl.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    let searchBtn = fixture.debugElement.nativeElement.querySelector('trng-button');
    searchBtn.click();

    tick();
    fixture.detectChanges();

    expect(console.log).toHaveBeenCalledWith(testInput);
  }));
});
