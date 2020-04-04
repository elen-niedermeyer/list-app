import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { AddItemPageRoutingModule } from './add-item-routing.module';
import { AddItemPage } from './add-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AddItemPageRoutingModule
  ],
  declarations: [AddItemPage]
})
export class AddItemPageModule { }
