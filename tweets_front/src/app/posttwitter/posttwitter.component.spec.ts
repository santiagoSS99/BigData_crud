import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosttwitterComponent } from './posttwitter.component';

describe('PosttwitterComponent', () => {
  let component: PosttwitterComponent;
  let fixture: ComponentFixture<PosttwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosttwitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosttwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
