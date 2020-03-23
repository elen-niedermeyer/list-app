import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../../components/header/header.module';
import { EditListPage } from './edit-list.page';
import { EditListPageRoutingModule } from './edit-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    EditListPageRoutingModule
  ],
  declarations: [
    EditListPage
  ]
})
export class EditListPageModule { }
