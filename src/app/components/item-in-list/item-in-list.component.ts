import { Component, Input, OnInit } from '@angular/core';
import { ElementTypes } from 'src/app/element-types.enum';
import { ToDoItem } from 'src/app/item';

@Component({
  selector: 'app-item-in-list',
  templateUrl: './item-in-list.component.html',
  styleUrls: ['./item-in-list.component.scss'],
})
export class ItemInListComponent implements OnInit{

  @Input() listDocId: string
  @Input() item: ToDoItem

  docPath: string
  deleteButtonType = ElementTypes.TYPE_ITEM

  constructor() { }

  ngOnInit() {
    this.docPath = 'lists/' + this.listDocId + '/items/' + this.item.docId
  }

}
