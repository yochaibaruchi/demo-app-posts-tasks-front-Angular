import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpslistComponent } from './empslist.component';

describe('EmpslistComponent', () => {
  let component: EmpslistComponent;
  let fixture: ComponentFixture<EmpslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
