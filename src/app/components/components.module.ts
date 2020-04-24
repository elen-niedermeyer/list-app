import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddButtonComponent } from './add-button/add-button.component';
import { AddFabComponent } from './add-fab/add-fab.component';
import { CancelButtonComponent } from './cancel-button/cancel-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { HeaderComponent } from './header/header.component';
import { ItemInListComponent } from './item-in-list/item-in-list.component';
import { RemoveButtonComponent } from './remove-button/remove-button.component';
import { SettingsButtonComponent } from './settings-button/settings-button.component';
import { SortingButtonComponent } from './sorting-button/sorting-button.component';
import { SortingMenuComponent } from './sorting-menu/sorting-menu.component';
import { ToDoItemMenuComponent } from './to-do-item-menu/to-do-item-menu.component';
import { ToDoListMenuComponent } from './to-do-list-menu/to-do-list-menu.component';

@NgModule({
  declarations: [
    AddButtonComponent,
    AddFabComponent,
    CancelButtonComponent,
    DeleteButtonComponent,
    HeaderComponent,
    ItemInListComponent,
    RemoveButtonComponent,
    SettingsButtonComponent,
    SortingButtonComponent,
    SortingMenuComponent,
    ToDoItemMenuComponent,
    ToDoListMenuComponent
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
    CancelButtonComponent,
    DeleteButtonComponent,
    HeaderComponent,
    ItemInListComponent,
    RemoveButtonComponent,
    SettingsButtonComponent,
    SortingButtonComponent,
    SortingMenuComponent,
    ToDoItemMenuComponent,
    ToDoListMenuComponent
  ]
})
export class ComponentsModule { }
