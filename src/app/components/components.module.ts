import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddButtonComponent } from './add-button/add-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { HeaderComponent } from './header/header.component';
import { HomeButtonComponent } from './home-button/home-button.component';

@NgModule({
  declarations: [
    AddButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    HeaderComponent,
    HomeButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    AddButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    HeaderComponent,
    HomeButtonComponent
  ]
})
export class ComponentsModule { }
