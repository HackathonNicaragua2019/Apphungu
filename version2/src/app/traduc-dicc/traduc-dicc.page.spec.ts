import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TraducDiccPage } from './traduc-dicc.page';

describe('TraducDiccPage', () => {
  let component: TraducDiccPage;
  let fixture: ComponentFixture<TraducDiccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraducDiccPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TraducDiccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
