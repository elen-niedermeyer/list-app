import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SettingsToDoListComponent } from 'src/app/components/settings-to-do-list/settings-to-do-list.component';
import { ElementTypes } from 'src/app/element-types.enum';
import { ToDoList } from 'src/app/list';
import { ItemsService } from 'src/app/services/items.service';
import { ListsService } from '../../../services/lists.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

  deleteButtonType = ElementTypes.TYPE_LIST

  list: ToDoList = {
    name: "",
    creation_date: null,
    items: []
  }; /*TODO: was mache ich damit?*/

  areCheckedItemsShown: boolean = false;

  constructor(
    private listsService: ListsService,
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private popoverController: PopoverController
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
    return this.list.items.filter(item => { return !item.completed; });
  }

  filterCheckedItems() {
    return this.list.items.filter(item => { return item.completed; });
  }

  toggleCheckedItems() {
    this.areCheckedItemsShown = !this.areCheckedItemsShown;
  }

  async showListSettingsPopover(event, listDocId) {
    const popover = await this.popoverController.create({
      component: SettingsToDoListComponent,
      event: event,
      componentProps: { docId: listDocId }
    })

    return await popover.present()
  }

}