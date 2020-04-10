import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItemOptionsService } from 'src/app/services/to-do-item-options.service';
import { ToDoItem } from 'src/app/to-do-item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  listDocId;
  item: ToDoItem = { name: null, creation_date: new Date().toISOString(), completed: false, completed_date: null, due_date: null, note: null }; /*TODO: was mache ich damit?*/

  constructor(
    private itemOptionsService: ToDoItemOptionsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listDocId = params.get('listId')
    })
  }

  async submitItemForm() {
    this.itemOptionsService.addItem(this.listDocId, this.item)
  }

}
