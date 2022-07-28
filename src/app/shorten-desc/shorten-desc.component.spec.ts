import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenDescComponent } from './shorten-desc.component';

describe('ShortenDescComponent', () => {
  let component: ShortenDescComponent;
  let fixture: ComponentFixture<ShortenDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortenDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortenDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
