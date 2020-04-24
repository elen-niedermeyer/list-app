import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { SortingMenuComponent } from 'src/app/components/sorting-menu/sorting-menu.component';
import { ToDoListMenuComponent } from 'src/app/components/to-do-list-menu/to-do-list-menu.component';
import { ITEM_SORT_ORDER } from 'src/app/item-sort-order.enum';
import { ToDoItemDatabaseService } from 'src/app/services/to-do-item-database.service';
import { ToDoItemService } from 'src/app/services/to-do-item.service';
import { ToDoList } from 'src/app/to-do-list';
import { ToDoListDatabaseService } from '../../../services/to-do-list-database.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.page.html',
  styleUrls: ['./view-list.page.scss'],
})
export class ViewListPage implements OnInit {

  list: ToDoList = {
    name: "",
    creation_date: null,
    items: [],
    item_sort_order: ITEM_SORT_ORDER.DEFAULT
  }; /*TODO: was mache ich damit?*/

  areCheckedItemsShown: boolean = false;

  constructor(
    private listDBService: ToDoListDatabaseService,
    private itemDBService: ToDoItemDatabaseService,
    private itemService: ToDoItemService,
    private route: ActivatedRoute,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listDBService.getList(params.get('listId'))
        .pipe(take(1))
        .subscribe(list => {
          this.list = list
          this.itemDBService.getItemsFromList(this.list.docId)
            .pipe(take(1))
            .subscribe(items => {
              this.list.items = this.itemService.sortItems(items, this.list.item_sort_order)
            })
        })
    })
  }

  filterUncheckedItems() {
    return this.list.items.filter(item => { return !item.completed; });
  }

  filterCheckedItems() {
    return this.list.items.filter(item => { return item.completed; });
  }

  toggleShowCheckedItems() {
    this.areCheckedItemsShown = !this.areCheckedItemsShown;
  }

  async showSortingSettingsPopover(event) {
    const popover = await this.popoverController.create({
      component: SortingMenuComponent,
      event: event,
      componentProps: { docId: this.list.docId }
    })

    return await popover.present()
  }

  async showListSettingsPopover(event) {
    const popover = await this.popoverController.create({
      component: ToDoListMenuComponent,
      event: event,
      componentProps: { docId: this.list.docId }
    })

    return await popover.present()
  }

}