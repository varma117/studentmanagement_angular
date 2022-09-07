import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstudentsComponent } from './getstudents.component';

describe('GetstudentsComponent', () => {
  let component: GetstudentsComponent;
  let fixture: ComponentFixture<GetstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
