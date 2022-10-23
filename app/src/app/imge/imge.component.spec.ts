import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgeComponent } from './imge.component';

describe('ImgeComponent', () => {
  let component: ImgeComponent;
  let fixture: ComponentFixture<ImgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
