import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddButtonComponent } from './add-button/add-button.component';
import { AddFabComponent } from './add-fab/add-fab.component';
import { HeaderComponent } from './header/header.component';
import { ItemInListComponent } from './item-in-list/item-in-list.component';
import { RemoveButtonComponent } from './remove-button/remove-button.component';
import { SettingsButtonComponent } from './settings-button/settings-button.component';
import { SettingsToDoItemComponent } from './settings-to-do-item/settings-to-do-item.component';
import { SettingsToDoListComponent } from './settings-to-do-list/settings-to-do-list.component';

@NgModule({
  declarations: [
    AddButtonComponent,
    AddFabComponent,
    HeaderComponent,
    ItemInListComponent,
    RemoveButtonComponent,
    SettingsButtonComponent,
    SettingsToDoItemComponent,
    SettingsToDoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    AddButtonComponent,
    AddFabComponent,
    HeaderComponent,
    ItemInListComponent,
    RemoveButtonComponent,
    SettingsButtonComponent,
    SettingsToDoItemComponent,
    SettingsToDoListComponent
  ]
})
export class ComponentsModule { }
