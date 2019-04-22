import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsCreateComponent } from './clubs-create.component';

describe('ClubsCreateComponent', () => {
  let component: ClubsCreateComponent;
  let fixture: ComponentFixture<ClubsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
