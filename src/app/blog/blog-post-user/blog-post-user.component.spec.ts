import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostUserComponent } from './blog-post-user.component';

describe('BlogPostUserComponent', () => {
  let component: BlogPostUserComponent;
  let fixture: ComponentFixture<BlogPostUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
