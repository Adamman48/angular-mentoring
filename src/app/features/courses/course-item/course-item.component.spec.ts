import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { first } from 'rxjs';
import { CourseItemInterface } from 'src/app/core/definitions/courses.feature';
import { IconLigaturesEnum } from 'src/app/core/definitions/icons.shared';
import { SharedModule } from 'src/app/shared/shared.module';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let mockCourseItemData: CourseItemInterface;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    mockCourseItemData = {
      creationDate: new Date('1995-12-17T03:24:00'),
      description: 'May the Force be with you!',
      duration: 69,
      id: 'test1',
      title: 'Sir TestALot',
    };
  });

  it('should create', () => {
    component.courseItemData = mockCourseItemData;

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should display main section properly', () => {
    component.courseItemData = mockCourseItemData;

    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelector('.main-section h3').textContent).toContain(mockCourseItemData.title);
    expect(compiled.querySelector('.main-section p').textContent).toBe(mockCourseItemData.description);
  });

  it('should display title with star icon if isTopRated is true', () => {
    component.courseItemData = {
      ...mockCourseItemData,
      isTopRated: true,
    };

    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('.main-section trng-icon')).toBeTruthy();
    expect(compiled.querySelector('.main-section h3').textContent).toContain('star');
  });

  it('should display sub section properly', () => {
    component.courseItemData = mockCourseItemData;

    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('.course-duration span')[0].textContent).toContain(IconLigaturesEnum.CLOCK);
    expect(compiled.querySelectorAll('.course-duration span')[1].textContent).toBe('1h 9m');
    expect(compiled.querySelectorAll('.course-release span')[0].textContent).toContain(IconLigaturesEnum.CALENDAR);
    expect(compiled.querySelectorAll('.course-release span')[1].textContent).toBe(mockCourseItemData.creationDate.toLocaleDateString());
    expect(compiled.querySelectorAll('trng-button').length).toBe(2);
  });

  it('should fire deleteItem event with itemId upon clicking delete btn', fakeAsync(() => {
    component.courseItemData = mockCourseItemData;
    let expectedItemId: string = '';
    component.deleteItemEvent.pipe(first()).subscribe((itemId: string) => expectedItemId = itemId);

    fixture.debugElement.nativeElement.querySelectorAll('trng-button')[1].click();
    tick();
    
    expect(expectedItemId).toBe(mockCourseItemData.id);
  }));
});
