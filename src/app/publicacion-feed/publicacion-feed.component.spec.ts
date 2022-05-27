import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionFeedComponent } from './publicacion-feed.component';

import { IonicModule } from '@ionic/angular';

describe('PublicacionFeedComponent', () => {
  let component: PublicacionFeedComponent;
  let fixture: ComponentFixture<PublicacionFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
