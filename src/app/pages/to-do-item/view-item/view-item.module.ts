import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewItemPageRoutingModule } from './view-item-routing.module';

import { ViewItemPage } from './view-item.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ViewItemPageRoutingModule
  ],
  declarations: [ViewItemPage]
})
export class ViewItemPageModule {}
