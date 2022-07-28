import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsNavigationComponent } from './items-navigation.component';

describe('ItemsNavigationComponent', () => {
  let component: ItemsNavigationComponent;
  let fixture: ComponentFixture<ItemsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
