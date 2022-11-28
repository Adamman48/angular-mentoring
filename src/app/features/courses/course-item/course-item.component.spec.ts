import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { first } from 'rxjs';
import { CourseItemInterface } from 'src/app/core/definitions/courses.feature';
import { IconLigaturesEnum } from 'src/app/core/definitions/icons.shared';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseBorderByCreationDirective } from './course-border.directive';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let courseItemDe: DebugElement;
  let mockCourseItemData: CourseItemInterface;
  const oneDayInMs: number = 86400000;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ CourseItemComponent, CourseBorderByCreationDirective ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    courseItemDe = fixture.debugElement;

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

  it('should add green border if creationDate is more recent than 14 days', () => {
    component.courseItemData = {
      ...mockCourseItemData,
      creationDate: new Date(Date.now() - oneDayInMs),
    };

    fixture.detectChanges();
    const borderClr = fixture.debugElement.nativeElement.querySelector('.item-wrapper').style.borderColor;
    
    expect(borderClr).toBe('rgb(103, 163, 0)');
  });

  it('should add blue border if creationDate is a future date', () => {
    component.courseItemData = {
      ...mockCourseItemData,
      creationDate: new Date(Date.now() + oneDayInMs),
    };

    fixture.detectChanges();
    const borderClr = courseItemDe.nativeElement.querySelector('.item-wrapper').style.borderColor;

    expect(borderClr).toBe('rgb(1, 158, 204)');
  });

  it('should have default border color if course is older than 14 days', () => {
    component.courseItemData = {
      ...mockCourseItemData,
      creationDate: new Date(Date.now() - oneDayInMs * 15),
    };

    fixture.detectChanges();
    const borderClr = courseItemDe.nativeElement.querySelector('.item-wrapper').style.borderColor;

    expect(borderClr).toBe('');
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
