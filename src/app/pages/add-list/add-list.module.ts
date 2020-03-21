import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddListPageRoutingModule } from './add-list-routing.module';
import { AddListPage } from './add-list.page';
import { AddButtonModule } from 'src/app/components/add-button/add-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddButtonModule,
    AddListPageRoutingModule
  ],
  declarations: [
    AddListPage
  ]
})
export class AddListPageModule { }
