import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { AddListPageRoutingModule } from './add-list-routing.module';
import { AddListPage } from './add-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AddListPageRoutingModule
  ],
  declarations: [
    AddListPage
  ]
})
export class AddListPageModule { }
