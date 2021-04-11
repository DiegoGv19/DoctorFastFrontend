import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTableFilterRankingComponent } from './body-table-filter-ranking.component';

describe('BodyTableFilterRankingComponent', () => {
  let component: BodyTableFilterRankingComponent;
  let fixture: ComponentFixture<BodyTableFilterRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTableFilterRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTableFilterRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
