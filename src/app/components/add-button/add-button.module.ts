import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AddButtonComponent } from './add-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [AddButtonComponent]
})
export class AddButtonModule { }
