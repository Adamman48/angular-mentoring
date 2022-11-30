import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseItemInterface, OrderEnum } from 'src/app/core/definitions/courses.feature';
import { SearchFilterPipe } from 'src/app/shared/components/search/search-filter.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseBorderByCreationDirective } from '../course-item/course-border.directive';
import { CourseItemComponent } from '../course-item/course-item.component';
import { FormatDurationPipe } from '../course-item/format-duration.pipe';
import { CoursesService } from '../courses.service';

import { CoursesComponent } from './courses.component';
import { OrderByPipe } from './order-by.pipe';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let coursesDe: DebugElement;
  let coursesServiceStub: Partial<CoursesService>;

  beforeEach(async () => {
    coursesServiceStub = jasmine.createSpyObj('CoursesService', {
      getCourses: () => [
        {
          id: 'test3',
          creationDate: new Date(2021, 11, 23),
          title: 'test3',
          duration: 5,
          description: 'lorem ipsum'
        },
        {
          id: 'test2',
          creationDate: new Date(2022, 5, 9),
          title: 'test2',
          duration: 60,
          description: 'lorem ipsum'
        },
        {
          id: 'test1',
          creationDate: new Date(2022, 3, 20),
          title: 'test1',
          duration: 10,
          description: 'lorem ipsum',
          isTopRated: true,
        },
      ],
    });

    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ CoursesComponent, CourseItemComponent, CourseBorderByCreationDirective, FormatDurationPipe, OrderByPipe ],
      providers: [ { provide: CoursesService, useValue: coursesServiceStub } ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    coursesDe = fixture.debugElement;
    component = coursesDe.componentInstance;
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use CoursesService to get course items', () => {
    let coursesService = coursesDe.injector.get(CoursesService);
    
    fixture.detectChanges();

    expect(coursesService.getCourses()[1]).toEqual(component.currentCourseItemsList[1]);
  });

  it('should display search component', () => {
    let compiled = coursesDe.nativeElement;
    
    expect(compiled.querySelector('trng-search')).toBeTruthy();
  });

  it('should display Add course button component', () => {
    let compiled = coursesDe.nativeElement;
    
    expect(compiled.querySelector('trng-button')).toBeTruthy();
  });

  it('should display all course items provided by service and track by itemId', () => {
    spyOn(component, 'trackByFn');
    let coursesService = coursesDe.injector.get(CoursesService);

    fixture.detectChanges();
    
    let compiled = coursesDe.nativeElement;
    
    expect(compiled.querySelectorAll('trng-course-item').length).toEqual(coursesService.getCourses().length);
    expect(component.trackByFn).toHaveBeenCalledWith(0, component.currentCourseItemsList[0]);
  });

  it('should display Load more button', () => {
    let coursesService = coursesDe.injector.get(CoursesService);
    /* coursesService.setCourse({
      id: 'test3',
      creationDate: new Date(),
      title: 'test3',
      duration: 1,
      description: 'lorem ipsum'
    }); */
    fixture.detectChanges();
    let compiled = coursesDe.nativeElement;
    
    expect(compiled.querySelector('.more-btn').textContent).toBe('Load more');
  });

  it('should not display load more button if fewer than 3 courses are available', () => {
    let compiled = coursesDe.nativeElement;

    expect(compiled.querySelector('.more-btn')).toBeFalsy();
  });

  it('should call onClickMore upon clicking Load more button', fakeAsync(() => {
    let coursesService = coursesDe.injector.get(CoursesService);
    /* coursesService.setCourse({
      id: 'test3',
      creationDate: new Date(),
      title: 'test3',
      duration: 1,
      description: 'lorem ipsum'
    }); */
    fixture.detectChanges();
    spyOn(console, 'log');

    let loadMoreBtn = coursesDe.nativeElement.querySelector('.more-btn');
    loadMoreBtn.click();
    tick();

    fixture.detectChanges();

    expect(console.log).toHaveBeenCalledWith('load more');
  }));

  it('should remove course item by id upon calling removeItemById', fakeAsync(() => {
    spyOn(component, 'removeItemById');
    let coursesService = coursesDe.injector.get(CoursesService);

    fixture.detectChanges();
    
    let compiled = coursesDe.nativeElement;
    
    expect(compiled.querySelectorAll('trng-course-item').length).toEqual(coursesService.getCourses().length);

    coursesDe.queryAll(By.css('trng-course-item'))[0].triggerEventHandler('deleteItemEvent', component.currentCourseItemsList[0].id);

    tick();
    fixture.detectChanges();

    expect(component.removeItemById).toHaveBeenCalledWith(component.currentCourseItemsList[0].id);
  }));

  it('should call filterCoursesBySearchInput upon clicking search button', fakeAsync(() => {
    const testInput = 'This is the way.';
    spyOn(component, 'filterCoursesBySearchInput');
    
    let inputEl = coursesDe.nativeElement.querySelector('trng-search input');
    inputEl.value = testInput;
    inputEl.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    let searchEl = coursesDe.query(By.css('trng-search'));
    searchEl.triggerEventHandler('inputChangeEvent', testInput);

    tick();
    fixture.detectChanges();

    expect(component.filterCoursesBySearchInput).toHaveBeenCalledWith(testInput);
  }));

  // TODO: test searchpipe.transform call

  it('should not call SearchFilterPipe.transform upon clicking search button with empty input field', fakeAsync(() => {
    const searchPipe = coursesDe.injector.get(SearchFilterPipe);
    spyOn(searchPipe, 'transform');

    let inputEl = coursesDe.nativeElement.querySelector('trng-search input');
    inputEl.value = '';
    inputEl.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    let searchEl = coursesDe.query(By.css('trng-search'));
    searchEl.triggerEventHandler('inputChangeEvent', '');

    tick();
    fixture.detectChanges();

    expect(searchPipe.transform).not.toHaveBeenCalled();
  }));

  describe('SearchFilterPipe', () => {
    const pipe = new SearchFilterPipe();
    let mockCoursesList: CourseItemInterface[];
    let mockStringList: string[];

    beforeEach(() => {
      mockCoursesList = [{
        id: 'test3',
        creationDate: new Date(2021, 11, 23),
        title: 'test3',
        duration: 5,
        description: 'lorem ipsum'
      },
      {
        id: 'test2',
        creationDate: new Date(2022, 5, 9),
        title: 'test2',
        duration: 60,
        description: 'lorem ipsum'
      },
      {
        id: 'test1',
        creationDate: new Date(2022, 3, 20),
        title: 'test1',
        duration: 10,
        description: 'lorem ipsum',
        isTopRated: true,
      },
    ];

    mockStringList = [
      'test1',
      'test2',
      'test3',
    ];
    });

    it('should filter courses list', () => {
      const expectedFilteredList = [mockCoursesList[1]];

      expect(pipe.transform(mockCoursesList, '2', 'title')).toEqual(expectedFilteredList);
    });

    it('should filter courses list by description', () => {
      const expectedFilteredList = [...mockCoursesList];

      expect(pipe.transform(mockCoursesList, 'lorem', 'description')).toEqual(expectedFilteredList)
    });

    it('should filter simple string list', () => {
      const expectedFilteredList = [mockStringList[2]];

      expect(pipe.transform(mockStringList, '3')).toEqual(expectedFilteredList)
    });
  });
  
  describe('OrderByPipe', () => {
    const pipe = new OrderByPipe();
    let mockCoursesList: CourseItemInterface[];

    beforeEach(() => {
      mockCoursesList = [{
            id: 'test3',
            creationDate: new Date(2021, 11, 23),
            title: 'test3',
            duration: 5,
            description: 'lorem ipsum'
          },
          {
            id: 'test2',
            creationDate: new Date(2022, 5, 9),
            title: 'test2',
            duration: 60,
            description: 'lorem ipsum'
          },
          {
            id: 'test1',
            creationDate: new Date(2022, 3, 20),
            title: 'test1',
            duration: 10,
            description: 'lorem ipsum',
            isTopRated: true,
          },
      ];
    });

    it('should order course items by descending order by default', () => {
      const expectedOrderedList = [mockCoursesList[1], mockCoursesList[2], mockCoursesList[0]];

      expect(pipe.transform(mockCoursesList, 'duration')).toEqual(expectedOrderedList);
    });

    it('should order course items by ascending order', () => {
      const expectedOrderedList = [mockCoursesList[0], mockCoursesList[2], mockCoursesList[1]];

      expect(pipe.transform(mockCoursesList, 'duration', OrderEnum.ASCENDING)).toEqual(expectedOrderedList);
    });

    it('should order course items by descending order', () => {
      const expectedOrderedList = [mockCoursesList[1], mockCoursesList[2], mockCoursesList[0]];

      expect(pipe.transform(mockCoursesList, 'duration', OrderEnum.DESCENDING)).toEqual(expectedOrderedList);
    });

    it('should order properly by creationDate', () => {
      const expectedOrderedList = [mockCoursesList[0], mockCoursesList[2], mockCoursesList[1]];

      expect(pipe.transform(mockCoursesList, 'creationDate', OrderEnum.ASCENDING)).toEqual(expectedOrderedList);
    });

    it('should order properly by title', () => {
      const expectedOrderedList = [mockCoursesList[2], mockCoursesList[1], mockCoursesList[0]];

      expect(pipe.transform(mockCoursesList, 'title', OrderEnum.ASCENDING)).toEqual(expectedOrderedList);
    });
  });
});
