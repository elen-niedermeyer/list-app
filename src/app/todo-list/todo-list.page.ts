import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
  list = { "id": null as string, "items": [] }; /*TODO: was mache ich damit?*/

  areCheckedItemsShown: boolean = false;

  constructor(private listsService: ListsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listsService.getLists()
        .subscribe(lists => {
          if (Array.isArray(lists)) {
            lists.filter(list => {
              if (list.id == params.get('listId')) {
                this.list = list;
              }
            })
          }
        })
    });
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