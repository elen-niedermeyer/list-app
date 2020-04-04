import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/app/item';
import { ItemsService } from 'src/app/services/items.service';

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
    private itemsService: ItemsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listDocId = params.get('listId')
      this.itemsService.getItem(this.listDocId, params.get('itemId')).subscribe(item => this.item = item);
    })
  }

  submitUpdateItemForm() {
    this.itemsService.update(this.listDocId, this.item)
  }

}
