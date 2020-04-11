import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItemDatabaseService } from 'src/app/services/to-do-item-database.service';
import { ToDoItemService } from 'src/app/services/to-do-item.service';
import { ToDoItem } from 'src/app/to-do-item';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {

  listDocId: string
  item: ToDoItem = {
    name: "",
    creation_date: "",
    completed: false,
  } /*TODO*/

  constructor(
    private itemDBService: ToDoItemDatabaseService,
    private itemService: ToDoItemService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listDocId = params.get('listId')
      this.itemDBService.getItem(this.listDocId, params.get('itemId'))
        .subscribe(item => {
          this.item = item
        })
    })
  }

  async submitUpdateItemForm() {
    this.itemService.updateItem(this.listDocId, this.item)
  }

  deleteItem() {
    this.itemService.deleteItem(this.listDocId, this.item.docId)
  }

}
