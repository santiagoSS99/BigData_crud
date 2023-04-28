import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertweetComponent } from './vertweet.component';

describe('VertweetComponent', () => {
  let component: VertweetComponent;
  let fixture: ComponentFixture<VertweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertweetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VertweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
