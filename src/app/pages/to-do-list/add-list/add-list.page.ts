import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoItem } from 'src/app/item';
import { ToDoList } from 'src/app/list';
import { ErrorAlertService } from 'src/app/services/error-alert.service';
import { ItemsService } from 'src/app/services/items.service';
import { ListsService } from 'src/app/services/lists.service';

const emptyItem: ToDoItem = { name: null, creation_date: new Date().toISOString(), completed: false, completed_date: null, due_date: null, note: null }; /*TODO: was mache ich damit?*/

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
    private listsService: ListsService,
    private itemsSevice: ItemsService,
    private errorAlertService: ErrorAlertService,
    private router: Router
  ) { }

  async submitListForm() {
    let items = this.list.items.slice() // deep copy
    this.list.items = []
    let res = await this.listsService.addList(this.list);
    if (res.result) {
      this.list.docId = res.data;

      // add items without error handling because the list is already created
      items.forEach(item => {
        if (item.name) {
          this.itemsSevice.addItem(this.list.docId, item)
        }
      })

      this.router.navigate(['/list', this.list.docId]);
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }

  addItem() {
    this.list.items.push({ ...emptyItem })
  }

  removeItem(index) {
    this.list.items.splice(index, 1)
  }

}
