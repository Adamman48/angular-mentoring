import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should call onLogoutClick upon clicking logout button', fakeAsync(() => {
    spyOn(console, 'log');
    fixture.detectChanges();

    let logoutBtn = fixture.debugElement.nativeElement.querySelector('.logout-btn');
    logoutBtn.click();

    tick();
    fixture.detectChanges();

    expect(console.log).toHaveBeenCalledWith('logged out');
  }));
});
