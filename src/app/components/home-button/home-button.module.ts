import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeButtonComponent } from './home-button.component';

@NgModule({
  declarations: [HomeButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [HomeButtonComponent]
})
export class HomeButtonModule { }
