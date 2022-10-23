import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNtodosComponent } from './post-ntodos.component';

describe('PostNtodosComponent', () => {
  let component: PostNtodosComponent;
  let fixture: ComponentFixture<PostNtodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostNtodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostNtodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
