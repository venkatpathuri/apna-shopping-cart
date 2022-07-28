import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDashboardComponent } from './items-dashboard.component';

describe('ItemsDashboardComponent', () => {
  let component: ItemsDashboardComponent;
  let fixture: ComponentFixture<ItemsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
