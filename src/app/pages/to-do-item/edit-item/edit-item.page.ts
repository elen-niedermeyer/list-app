import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorAlertService } from 'src/app/services/error-alert.service';
import { ToDoItemOptionsService } from 'src/app/services/to-do-item-options.service';
import { ToDoItemsService } from 'src/app/services/to-do-items.service';
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
    private itemsService: ToDoItemsService,
    private itemOptionsService: ToDoItemOptionsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listDocId = params.get('listId')
      this.itemsService.getItem(this.listDocId, params.get('itemId'))
        .subscribe(item => {
          this.item = item
        })
    })
  }

  async submitUpdateItemForm() {
    this.itemOptionsService.updateItem(this.listDocId, this.item)
  }

  deleteItem() {
    this.itemOptionsService.deleteItem(this.listDocId, this.item.docId)
  }

}
