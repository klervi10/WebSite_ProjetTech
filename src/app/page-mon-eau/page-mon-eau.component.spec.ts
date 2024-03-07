import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMonEauComponent } from './page-mon-eau.component';

describe('PageMonEauComponent', () => {
  let component: PageMonEauComponent;
  let fixture: ComponentFixture<PageMonEauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMonEauComponent]
    });
    fixture = TestBed.createComponent(PageMonEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
