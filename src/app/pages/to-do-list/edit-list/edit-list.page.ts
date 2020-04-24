import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ITEM_SORT_ORDER } from 'src/app/item-sort-order.enum';
import { ToDoListDatabaseService } from 'src/app/services/to-do-list-database.service';
import { ToDoListService } from 'src/app/services/to-do-list.service';
import { ToDoList } from 'src/app/to-do-list';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.page.html',
  styleUrls: ['./edit-list.page.scss'],
})
export class EditListPage {
  list: ToDoList = {
    name: null as string,
    creation_date: null,
    items: [],
    item_sort_order: ITEM_SORT_ORDER.DEFAULT
  } /*TODO: Was mache ich hiermit? */

  constructor(
    private listDBService: ToDoListDatabaseService,
    private listService: ToDoListService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listDBService.getList(params.get('listId'))
        .pipe(take(1))
        .subscribe(list => this.list = list);
    })
  }

  updateListForm() {
    this.listService.updateList(this.list)
  }

  deleteList() {
    this.listService.deleteList(this.list.docId)
  }

}
