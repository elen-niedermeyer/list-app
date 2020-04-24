import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { ITEM_SORT_ORDER } from 'src/app/item-sort-order.enum';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-sorting-menu',
  templateUrl: './sorting-menu.component.html',
  styleUrls: ['./sorting-menu.component.scss'],
})
export class SortingMenuComponent implements OnInit {

  listDocId: string

  ITEM_SORT_ORDER = ITEM_SORT_ORDER
  sortingOrderKeys: string[]

  constructor(
    private listService: ToDoListService,
    private navParams: NavParams,
    private popoverController: PopoverController,
  ) {
    // initialize keys of enum
    let keys = Object.keys(ITEM_SORT_ORDER)
    this.sortingOrderKeys = keys.slice(keys.length / 2)
    // remove element "DEFAULT"
    let index = this.sortingOrderKeys.indexOf("DEFAULT")
    this.sortingOrderKeys.splice(index, 1)
  }

  ngOnInit() {
    this.listDocId = this.navParams.get('docId')
  }

  updateSorting(key: string) {
    this.popoverController.dismiss()
    this.listService.updateListProperty(this.listDocId, { item_sort_order: ITEM_SORT_ORDER[key] })
  }

  sortOrderToString(sortOrder: ITEM_SORT_ORDER) {
    switch (sortOrder) {
      case ITEM_SORT_ORDER.CREATION_DATE_DESC:
        return "Creation Date Descending"
      case ITEM_SORT_ORDER.CREATION_DATE_ASC:
        return "Creation Date Ascending"
      case ITEM_SORT_ORDER.ALPHA_DESC:
        return "Alphabetically Descending"
      case ITEM_SORT_ORDER.ALPHA_ASC:
        return "Alphabetically Ascending"
      case ITEM_SORT_ORDER.DUE_DESC:
        return "Due Date Descending"
      case ITEM_SORT_ORDER.DUE_ASC:
        return "Due Date Ascending"
    }
  }

}
