import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavestudentComponent } from './savestudent.component';

describe('SavestudentComponent', () => {
  let component: SavestudentComponent;
  let fixture: ComponentFixture<SavestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavestudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
