import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditButtonModule } from 'src/app/components/edit-button/edit-button.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { TodoListPageRoutingModule } from './todo-list-routing.module';
import { TodoListPage } from './todo-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    EditButtonModule,
    TodoListPageRoutingModule
  ],
  declarations: [TodoListPage]
})
export class TodoListPageModule { }
