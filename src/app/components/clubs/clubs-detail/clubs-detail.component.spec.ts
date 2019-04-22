import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsDetailComponent } from './clubs-detail.component';

describe('ClubsDetailComponent', () => {
  let component: ClubsDetailComponent;
  let fixture: ComponentFixture<ClubsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
