import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { ViewListPageRoutingModule } from './view-list-routing.module';
import { ViewListPage } from './view-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ViewListPageRoutingModule
  ],
  declarations: [ViewListPage]
})
export class ViewListPageModule { }
