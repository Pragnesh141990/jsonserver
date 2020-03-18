import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrorxjsComponent } from './introrxjs.component';

describe('IntrorxjsComponent', () => {
  let component: IntrorxjsComponent;
  let fixture: ComponentFixture<IntrorxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrorxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrorxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
