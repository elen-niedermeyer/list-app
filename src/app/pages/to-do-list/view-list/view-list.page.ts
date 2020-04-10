import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ToDoListMenuComponent } from 'src/app/components/to-do-list-menu/to-do-list-menu.component';
import { ToDoItemsService } from 'src/app/services/to-do-items.service';
import { ToDoList } from 'src/app/to-do-list';
import { ToDoListsService } from '../../../services/to-do-lists.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.page.html',
  styleUrls: ['./view-list.page.scss'],
})
export class ViewListPage implements OnInit {

  list: ToDoList = {
    name: "",
    creation_date: null,
    items: []
  }; /*TODO: was mache ich damit?*/

  areCheckedItemsShown: boolean = false;

  constructor(
    private listsService: ToDoListsService,
    private itemsService: ToDoItemsService,
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

  toggleShowCheckedItems() {
    this.areCheckedItemsShown = !this.areCheckedItemsShown;
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