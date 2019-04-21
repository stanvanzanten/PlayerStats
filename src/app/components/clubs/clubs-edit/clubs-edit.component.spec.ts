import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsEditComponent } from './clubs-edit.component';

describe('ClubsEditComponent', () => {
  let component: ClubsEditComponent;
  let fixture: ComponentFixture<ClubsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
