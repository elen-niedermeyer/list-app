import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditButtonComponent } from './edit-button.component';

@NgModule({
  declarations: [EditButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [EditButtonComponent]
})
export class EditButtonModule { }
