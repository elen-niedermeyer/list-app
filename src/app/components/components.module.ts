import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddButtonComponent } from './add-button/add-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { HeaderComponent } from './header/header.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { ItemInListComponent } from './item-in-list/item-in-list.component';
import { RemoveButtonComponent } from './remove-button/remove-button.component';
import { SettingsButtonComponent } from './settings-button/settings-button.component';
import { SettingsToDoListComponent } from './settings-to-do-list/settings-to-do-list.component';

@NgModule({
  declarations: [
    AddButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    HeaderComponent,
    HomeButtonComponent,
    ItemInListComponent,
    RemoveButtonComponent,
    SettingsButtonComponent,
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
    DeleteButtonComponent,
    EditButtonComponent,
    HeaderComponent,
    HomeButtonComponent,
    ItemInListComponent,
    RemoveButtonComponent,
    SettingsButtonComponent,
    SettingsToDoListComponent
  ]
})
export class ComponentsModule { }
