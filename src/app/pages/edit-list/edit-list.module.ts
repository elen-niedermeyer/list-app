import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { EditListPageRoutingModule } from './edit-list-routing.module';
import { EditListPage } from './edit-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditListPageRoutingModule
  ],
  declarations: [
    EditListPage
  ]
})
export class EditListPageModule { }
