import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseTrackListComponent } from './release-track-list.component';

describe('ReleaseTrackListComponent', () => {
  let component: ReleaseTrackListComponent;
  let fixture: ComponentFixture<ReleaseTrackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseTrackListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseTrackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
