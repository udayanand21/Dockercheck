import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkformComponent } from './artworkform.component';

describe('ArtworkformComponent', () => {
  let component: ArtworkformComponent;
  let fixture: ComponentFixture<ArtworkformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtworkformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtworkformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
