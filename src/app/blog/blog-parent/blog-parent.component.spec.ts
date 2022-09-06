import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogParentComponent } from './blog-parent.component';

describe('BlogParentComponent', () => {
  let component: BlogParentComponent;
  let fixture: ComponentFixture<BlogParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
