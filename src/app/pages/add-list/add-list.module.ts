import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddButtonModule } from 'src/app/components/add-button/add-button.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { AddListPageRoutingModule } from './add-list-routing.module';
import { AddListPage } from './add-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddButtonModule,
    HeaderModule,
    AddListPageRoutingModule
  ],
  declarations: [
    AddListPage
  ]
})
export class AddListPageModule { }
