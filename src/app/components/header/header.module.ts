import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeButtonModule } from '../home-button/home-button.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeButtonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
