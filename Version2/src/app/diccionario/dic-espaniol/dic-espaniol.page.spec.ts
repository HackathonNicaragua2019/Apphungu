import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DicEspaniolPage } from './dic-espaniol.page';

describe('DicEspaniolPage', () => {
  let component: DicEspaniolPage;
  let fixture: ComponentFixture<DicEspaniolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicEspaniolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DicEspaniolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
