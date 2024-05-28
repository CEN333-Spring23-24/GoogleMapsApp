import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component } from './feature5.component';

describe('Feature5Component', () => {
  let component: Feature5Component;
  let fixture: ComponentFixture<Feature5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feature5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Feature5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
