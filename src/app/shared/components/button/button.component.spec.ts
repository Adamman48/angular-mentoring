import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconLigaturesEnum } from 'src/app/core/definitions/icons.shared';
import { IconComponent } from '../icon/icon.component';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let mockBtnText: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent, IconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;

    mockBtnText = 'Testa';
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should have proper inner text', () => {
    component.text = mockBtnText;

    fixture.detectChanges();

    let btnText = fixture.debugElement.nativeElement.querySelector('span');

    expect(btnText.textContent).toBe(mockBtnText);
  });

  it('should not render trng-icon if iconLigature is not provided', () => {
    component.text = mockBtnText;
    
    fixture.detectChanges();

    let btnIcon = fixture.debugElement.nativeElement.querySelector('trng-icon');

    expect(component.iconLigature).toBeFalsy();
    expect(btnIcon).toBeFalsy();
  });

  it('should not add btn-with-icon class to text element when no iconLigature is provided', () => {
    component.text = mockBtnText;

    fixture.detectChanges();

    let btnText = fixture.debugElement.nativeElement.querySelector('span');

    expect(btnText).not.toHaveClass('btn-with-icon');
  });

  it('should render trng-icon if iconLigature is provided', () => {
    component.text = mockBtnText;
    component.iconLigature = IconLigaturesEnum.CLOCK;

    fixture.detectChanges();

    let btnIcon = fixture.debugElement.nativeElement.querySelector('trng-icon');

    expect(btnIcon.textContent).toContain(IconLigaturesEnum.CLOCK);
  });

  it('should add btn-with-icon class to text if iconLigature is provided', () => {
    component.text = mockBtnText;
    component.iconLigature = IconLigaturesEnum.CALENDAR;

    fixture.detectChanges();

    let btnText = fixture.debugElement.nativeElement.querySelector('.btn-with-icon');

    expect(btnText).toBeTruthy();
  });
});
