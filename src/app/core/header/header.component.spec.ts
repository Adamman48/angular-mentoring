import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let headerDe: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    headerDe = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title in full uppercase', () => {
    const titleText = headerDe.nativeElement.querySelector('.title span');

    expect(titleText.textContent).toBe('SAILING COURSES')
  });

  it('should call onLogoutClick upon clicking logout button', fakeAsync(() => {
    spyOn(console, 'log');

    let logoutBtn = headerDe.nativeElement.querySelector('.logout-btn');
    logoutBtn.click();

    tick();
    fixture.detectChanges();

    expect(console.log).toHaveBeenCalledWith('logged out');
  }));
});
