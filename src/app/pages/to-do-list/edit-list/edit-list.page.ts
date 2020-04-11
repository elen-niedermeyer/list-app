import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoListDatabaseService } from 'src/app/services/to-do-list-database.service';
import { ToDoListOptionsService } from 'src/app/services/to-do-list-options.service';
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
    items: []
  } /*TODO: Was mache ich hiermit? */

  constructor(
    private listDBService: ToDoListDatabaseService,
    private listOptionsService: ToDoListOptionsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listDBService.getList(params.get('listId')).subscribe(list => this.list = list);
    })
  }

  updateListForm() {
    this.listOptionsService.updateList(this.list)
  }

  deleteList() {
    this.listOptionsService.deleteList(this.list.docId)
  }

}
