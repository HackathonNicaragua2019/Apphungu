import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CancioneroPage } from './cancionero.page';

describe('CancioneroPage', () => {
  let component: CancioneroPage;
  let fixture: ComponentFixture<CancioneroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancioneroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CancioneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
