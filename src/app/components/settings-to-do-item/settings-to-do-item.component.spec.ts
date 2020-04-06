import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingsToDoItemComponent } from './settings-to-do-item.component';

describe('SettingsToDoItemComponent', () => {
  let component: SettingsToDoItemComponent;
  let fixture: ComponentFixture<SettingsToDoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsToDoItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsToDoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
