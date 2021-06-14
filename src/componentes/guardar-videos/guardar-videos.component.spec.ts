import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarVideosComponent } from './guardar-videos.component';

describe('GuardarVideosComponent', () => {
  let component: GuardarVideosComponent;
  let fixture: ComponentFixture<GuardarVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
