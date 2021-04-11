import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorRankingComponent } from './view-doctor-ranking.component';

describe('ViewDoctorRankingComponent', () => {
  let component: ViewDoctorRankingComponent;
  let fixture: ComponentFixture<ViewDoctorRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoctorRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoctorRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
