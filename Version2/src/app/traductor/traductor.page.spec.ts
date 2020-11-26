import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TraductorPage } from './traductor.page';

describe('TraductorPage', () => {
  let component: TraductorPage;
  let fixture: ComponentFixture<TraductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraductorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TraductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
