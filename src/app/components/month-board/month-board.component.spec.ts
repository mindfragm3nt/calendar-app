import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthBoardComponent } from './month-board.component';

describe('MonthBoardComponent', () => {
  let component: MonthBoardComponent;
  let fixture: ComponentFixture<MonthBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
