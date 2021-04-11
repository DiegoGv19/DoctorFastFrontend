import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRankingStatisticsComponent } from './doctor-ranking-statistics.component';

describe('DoctorRankingStatisticsComponent', () => {
  let component: DoctorRankingStatisticsComponent;
  let fixture: ComponentFixture<DoctorRankingStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRankingStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRankingStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
