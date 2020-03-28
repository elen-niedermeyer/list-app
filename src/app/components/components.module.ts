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
import { RemoveButtonComponent } from './remove-button/remove-button.component';

@NgModule({
  declarations: [
    AddButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    HeaderComponent,
    HomeButtonComponent,
    RemoveButtonComponent
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
    RemoveButtonComponent
  ]
})
export class ComponentsModule { }
