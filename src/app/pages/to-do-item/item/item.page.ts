import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/app/item';
import { ItemsService } from 'src/app/services/items.service';
import { ElementTypes } from 'src/app/element-types.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  listDocId: string
  item: ToDoItem = {
    name: "",
    creation_date: "",
    completed: false,
  } /*TODO*/

  docPath: string
  deleteButtonType = ElementTypes.TYPE_ITEM

  constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listDocId = params.get('listId')
      this.itemsService.getItem(this.listDocId, params.get('itemId'))
        .subscribe(item => {
          this.item = item
          this.docPath = 'lists/' + this.listDocId + '/items/' + this.item.docId
        })
    })
  }

  /*TODO handle error when updating completed value (see template) */

}
