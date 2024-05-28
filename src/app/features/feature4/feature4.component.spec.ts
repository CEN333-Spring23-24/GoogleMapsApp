import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component } from './feature4.component';

describe('Feature4Component', () => {
  let component: Feature4Component;
  let fixture: ComponentFixture<Feature4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feature4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Feature4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
