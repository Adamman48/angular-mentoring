import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseItemComponent } from '../course-item/course-item.component';
import { CoursesService } from '../courses.service';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let coursesServiceStub: Partial<CoursesService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ CoursesComponent, CourseItemComponent ],
      providers: [ { provide: CoursesService, useValue: coursesServiceStub } ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.debugElement.componentInstance;

    coursesServiceStub = {
      coursesList: [
        {
          id: 'test1',
          creationDate: new Date(),
          title: 'test1',
          duration: 1,
          description: 'lorem ipsum'
        },
        {
          id: 'test2',
          creationDate: new Date(),
          title: 'test2',
          duration: 1,
          description: 'lorem ipsum'
        },
      ]
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use CoursesService to get course items', () => {
    let coursesService = fixture.debugElement.injector.get(CoursesService);

    fixture.detectChanges();
    
    expect(coursesService.coursesList[1]).toEqual(component.courseItemsList[1]);
  });

  it('should display search component', () => {
    let compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelector('trng-search')).toBeTruthy();
  });

  it('should display Add course button component', () => {
    let compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelector('trng-button')).toBeTruthy();
  });

  it('should display all course items provided by service', () => {
    let coursesService = fixture.debugElement.injector.get(CoursesService);

    fixture.detectChanges();
    
    let compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelectorAll('trng-course-item').length).toEqual(coursesService.coursesList.length);
  });

  it('should display Load more button', () => {
    let compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelector('.more-btn').textContent).toBe('Load more');
  });

  it('should call onClickMore upon clicking Load more button', fakeAsync(() => {
    spyOn(component, 'onClickMore');

    let loadMoreBtn = fixture.debugElement.nativeElement.querySelector('.more-btn');
    loadMoreBtn.click();
    tick();

    fixture.detectChanges();

    expect(component.onClickMore).toHaveBeenCalled();
  }));

  xit('should remove course item by id upon calling removeItemById', fakeAsync(() => {
    // TODO: use triggerEventHandler to dispatch deleteItemEvent
    let coursesService = fixture.debugElement.injector.get(CoursesService);

    fixture.detectChanges();
    
    let compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelectorAll('trng-course-item').length).toEqual(coursesService.coursesList.length);
  }));
});
