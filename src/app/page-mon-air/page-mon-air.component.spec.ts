import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMonAirComponent } from './page-mon-air.component';

describe('PageMonAirComponent', () => {
  let component: PageMonAirComponent;
  let fixture: ComponentFixture<PageMonAirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMonAirComponent]
    });
    fixture = TestBed.createComponent(PageMonAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
