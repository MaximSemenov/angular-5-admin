import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestReportComponent } from './latest-report.component';

describe('LatestReportComponent', () => {
  let component: LatestReportComponent;
  let fixture: ComponentFixture<LatestReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
