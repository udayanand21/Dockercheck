import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistformComponent } from './artistform.component';

describe('ArtistformComponent', () => {
  let component: ArtistformComponent;
  let fixture: ComponentFixture<ArtistformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
