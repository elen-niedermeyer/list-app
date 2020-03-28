import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementTypes } from 'src/app/element-types.enum';
import { ItemsService } from 'src/app/services/items.service';
import { ListsService } from '../../services/lists.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

  deleteButtonType = ElementTypes.TYPE_LIST

  list = { docId: "", name: "", items: [] }; /*TODO: was mache ich damit?*/

  areCheckedItemsShown: boolean = false;

  constructor(
    private listsService: ListsService,
    private itemsService: ItemsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listsService.getList(params.get('listId'))
        .subscribe(list => {
          this.list = list
          this.itemsService.getItemsFromList(this.list.docId)
            .subscribe(items => this.list.items = items)
        });
    })
  }

  filterUncheckedItems() {
    return this.list.items.filter(item => { return !item.checked; });
  }

  filterCheckedItems() {
    return this.list.items.filter(item => { return item.checked; });
  }

  toggleCheckedItems() {
    this.areCheckedItemsShown = !this.areCheckedItemsShown;
  }

}