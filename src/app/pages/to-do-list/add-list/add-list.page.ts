import { Component } from '@angular/core';
import { ToDoListOptionsService } from 'src/app/services/to-do-list-options.service';
import { ToDoItem } from 'src/app/to-do-item';
import { ToDoList } from 'src/app/to-do-list';

const emptyItem: ToDoItem = {
  name: null,
  creation_date: new Date().toISOString(),
  completed: false,
  completed_date: null,
  due_date: null,
  note: null
}; /*TODO: was mache ich damit?*/

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage {

  list: ToDoList = {
    name: null as string,
    creation_date: new Date().toISOString(),
    items: []
  } /*TODO: Was mache ich hiermit? */

  constructor(
    private listOptionsService: ToDoListOptionsService
  ) { }

  async submitListForm() {
    this.listOptionsService.addList(this.list)
  }

  addItem() {
    this.list.items.push({ ...emptyItem })
  }

  removeItem(index) {
    this.list.items.splice(index, 1)
  }

}
